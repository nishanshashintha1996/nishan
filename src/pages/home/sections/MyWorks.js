const posts = [
    {
      title: 'FINDING THE RIGHT GUITAR FOR YOUR STYLE - 5 TIPS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
      year:"2023",
      month:"OCT",
      date:"10",
      thumbnail:
        'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        title: 'FINDING THE RIGHT GUITAR FOR YOUR STYLE - 5 TIPS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
        year:"2023",
        month:"OCT",
        date:"10",
        thumbnail:
          'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    }
  ]
  
  export default function MyWorks() {
    return (
      <div className="bg-white myworks-bg-modify dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-1">
        <div className="">
            <h2 className="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-center text-lg leading-8 text-gray-300">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {posts.map((post) => (
              <li key={post.name}>
                <article class="flex bg-white transition hover:shadow-xl">
                    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                        datetime="2022-10-10"
                        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                        >
                        <span>{post.year}</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>{post.month}{post.date}</span>
                        </time>
                    </div>

                    <div class="hidden sm:block sm:basis-56">
                        <img
                        alt="Guitar"
                        src={post.thumbnail}
                        class="aspect-square h-full w-full object-cover"
                        />
                    </div>

                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <h3 class="font-bold uppercase text-gray-900">
                                {post.title}
                            </h3>
                        </a>

                        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                            {post.description}
                        </p>
                        </div>

                        <div class="sm:flex sm:items-end sm:justify-end">
                        <a
                            href="#"
                            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                            Read Blog
                        </a>
                        </div>
                    </div>
                    </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  