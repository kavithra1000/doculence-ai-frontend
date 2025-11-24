import React from 'react'
import { Globe, FileType, FileMinus } from 'lucide-react'

const ExtractionSelection = () => {
  return (
    <section>
        <div className='flex gap-4 items-center justify-center mb-8'>
        <button>
            <Globe className='w-10 h-10 text-primary hover:scale-110 hover:rounded-full p-2 transition-all translate-0.5' color='#1aff88'/>
        </button>

        <button>
            <FileType className='w-10 h-10 text-primary hover:scale-110 hover:rounded-full p-2 transition-all translate-0.5' color='#1a94ff'/>
        </button>

        <button>
            <FileMinus className='w-10 h-10 text-primary hover:scale-110 hover:rounded-full p-2 transition-all translate-0.5' color='#ff4d4f' />
        </button>
    </div>
    </section>
    
  )
}

export default ExtractionSelection