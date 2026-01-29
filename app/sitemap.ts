import { MetadataRoute } from 'next'
import { connectToDatabase } from '@/lib/mongodb'

const baseUrl = 'https://www.jayaaitsolution.com'

// Static routes with their metadata
const staticRoutes = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/services', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/zero-trust', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/services/digital-transformation', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/services/advanced-it', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/services/professional', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/solutions', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/team', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/clients-partners', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/blogs', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly' as const, priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get static routes
  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Fetch dynamic blog posts from MongoDB
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const { db } = await connectToDatabase()
    const blogs = await db
      .collection('blogs')
      .find({})
      .project({ _id: 1, updatedAt: 1 })
      .sort({ createdAt: -1 })
      .toArray()

    blogPages = blogs.map((blog: any) => ({
      url: `${baseUrl}/blogs/${blog._id}`,
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  return [...staticPages, ...blogPages]
}
