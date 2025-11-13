import { notFound } from 'next/navigation'
import { getProductBySlug, getLatestProducts } from '@/lib/products'
import ProductDetailClient from './ProductDetailClient'
import { Link } from '@/i18n/navigation'
import { ArrowRightIcon } from 'lucide-react'
import ProductCard from '@/components/shared/product-card'
import { getTranslations } from 'next-intl/server'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const t = await getTranslations()

  let product
  try {
    product = await getProductBySlug(slug)
  } catch {
    notFound()
  }

  if (!product) {
    notFound()
  }

  const latestProducts = await getLatestProducts()

  return (
    <div>
      <ProductDetailClient product={product} />

      <div className="container mx-auto px-4 py-6 md:py-14">
        <div className="flex justify-between items-center mb-10">
          <h2 className="relative text-[22px] md:text-4xl font-bold text-gray-900 pb-4">
            {t('SecTitle.OurServices')}
            <span className="absolute left-0 bottom-0 w-full h-1  from-blue-500 to-white"></span>
          </h2>

          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 hidden md:flex items-center"
          >
            {t('SecTitle.SeeAllServices')}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="flex justify-end mt-8 md:hidden">
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 flex items-center text-lg"
          >
            {t('SecTitle.SeeAllServices')}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}