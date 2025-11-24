import Navbar from '../components/Navbar'
import { Check } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <section className='h-screen pricing flex flex-col gap-10 items-center pt-20 pb-10'>

        <div className="h-full flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Free Plan */}
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span>AI-driven image enhancements</span>
                </li>
                <li className="opacity-50">
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span className="line-through">Seamless cloud integration</span>
                </li>
                <li className="opacity-50">
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span className="line-through">Real-time collaboration tools</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Paid Plan */}
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span>AI-driven image enhancements</span>
                </li>
                <li className="opacity-50">
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span className="line-through">Seamless cloud integration</span>
                </li>
                <li className="opacity-50">
                  <Check className="size-4 me-2 inline-block text-success" />
                  <span className="line-through">Real-time collaboration tools</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Pricing