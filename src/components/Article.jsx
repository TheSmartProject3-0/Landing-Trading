import React from 'react'

const Article = () => {
  return (
    <div id="articulo">
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-screen-lg format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img class="mr-4 w-16 h-16 rounded-full" src="./images/Dangelo-foto.jpeg" alt="Dangelo Arrivillaga" />
                  <div>
                    <a href="#" rel="author" class="text-xl font-bold text-yellow-400 dark:text-white">Dangelo Arrivillaga</a>
                    <p class="text-base font-light text-gray-500 dark:text-gray-400">Desarrollador web, educador & CTO/Co-founder The Smart Project 3.0</p>
                    <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-07" title="February 8th, 2022">Feb. 7, 2022</time></p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            </header>
              <p class="lead text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quia magnam ipsum ratione amet excepturi tempore qui totam molestiae consequatur. Ratione saepe voluptatibus aliquam harum, quam a libero maxime dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora delectus magni consequuntur ab iusto asperiores assumenda, similique vero quisquam voluptas cupiditate laborum alias aperiam blanditiis nesciunt numquam est. Error?</p>
              <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur ullam ad harum ducimus cum cupiditate repellendus, fuga sunt, vitae provident sed? Ipsum, dolorum expedita laboriosam et voluptas saepe numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus vitae laboriosam nam. Dolores deserunt enim eius deleniti illo inventore quo ex facilis harum? Voluptatum ab corrupti esse ipsam sed nostrum.</p>
              <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quo autem suscipit molestiae perferendis recusandae ea veritatis dolor dolorum voluptatum rem illum facilis tenetur rerum animi et, dicta unde voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quos doloribus numquam veritatis sapiente corporis est, minus, magnam rem debitis sit quaerat distinctio minima atque impedit velit, nemo aliquid blanditiis?</p>
          </article>
        </div>
      </main>    
    </div>
  )
}

export default Article
