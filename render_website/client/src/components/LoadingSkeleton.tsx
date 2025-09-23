import { Skeleton } from "@/components/ui/skeleton"

interface LoadingSkeletonProps {
  variant: 'card' | 'list' | 'text' | 'hero' | 'metrics' | 'table' | 'chart' | 'testimonial' | 'blog' | 'technology'
  count?: number
  className?: string
}

export function LoadingSkeleton({ variant, count = 1, className = "" }: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (variant) {
      case 'card':
        return (
          <div className={`space-y-4 p-6 border rounded-lg ${className}`}>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex space-x-2 pt-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-16" />
            </div>
          </div>
        )
      
      case 'list':
        return (
          <div className={`space-y-3 ${className}`}>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </div>
          </div>
        )
      
      case 'text':
        return (
          <div className={`space-y-2 ${className}`}>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        )
      
      case 'hero':
        return (
          <div className={`space-y-6 text-center ${className}`}>
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            <Skeleton className="h-6 w-2/3 max-w-xl mx-auto" />
            <div className="flex justify-center space-x-4 pt-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-24" />
            </div>
          </div>
        )
      
      case 'metrics':
        return (
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton className="h-16 w-16 mx-auto rounded-full" />
                <Skeleton className="h-6 w-20 mx-auto" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>
        )
      
      case 'table':
        return (
          <div className={`space-y-3 ${className}`}>
            <div className="grid grid-cols-4 gap-4 p-4 border-b">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 p-4">
                {[...Array(4)].map((_, j) => (
                  <Skeleton key={j} className="h-4 w-full" />
                ))}
              </div>
            ))}
          </div>
        )
      
      case 'chart':
        return (
          <div className={`space-y-4 ${className}`}>
            <Skeleton className="h-6 w-48" />
            <div className="flex items-end space-x-2 h-40">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className={`w-12 h-${Math.floor(Math.random() * 20) + 20}`} />
              ))}
            </div>
          </div>
        )
      
      case 'testimonial':
        return (
          <div className={`space-y-4 p-6 border rounded-lg ${className}`}>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-4" />
              ))}
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <div className="flex items-center space-x-3 pt-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          </div>
        )
      
      case 'blog':
        return (
          <div className={`space-y-4 ${className}`}>
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex items-center justify-between pt-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        )
      
      case 'technology':
        return (
          <div className={`space-y-4 p-6 border rounded-lg ${className}`}>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-12 w-12 rounded" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 w-16" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-12" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-16" />
              ))}
            </div>
          </div>
        )
      
      default:
        return <Skeleton className={`h-4 w-full ${className}`} />
    }
  }

  return (
    <div className="animate-in fade-in-0 duration-500">
      {[...Array(count)].map((_, index) => (
        <div key={index} className={count > 1 ? "mb-4" : ""}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  )
}

// Additional specialized skeleton components
export function HeroSkeleton() {
  return (
    <div className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Skeleton className="h-16 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
        <Skeleton className="h-6 w-2/3 max-w-2xl mx-auto" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  )
}

export function MetricsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="text-center space-y-4">
          <Skeleton className="h-20 w-20 mx-auto rounded-full" />
          <Skeleton className="h-8 w-24 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      ))}
    </div>
  )
}

export function DataTableSkeleton() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <div className="border-b bg-muted/50 p-4">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
        </div>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-b p-4 last:border-b-0">
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}