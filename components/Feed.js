import React from 'react'

function Feed() {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
        <div>
          {/* Stories */}
          <Stories />
          {/* InputBox */}
          {/* Posts */}
        </div>
    </div>
  )
}

export default Feed