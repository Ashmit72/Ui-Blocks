import { Youtube } from '@untitled-ui/icons-react'


const Footer1 = () => {
  return (
    <footer className="max-w-screen-xl w-full mx-auto lg:border-t sm:border-t  bg-background py-6 lg:py-0 lg:px-6">
      <div className="flex flex-col-reverse px-5 md:px-6 lg:px-0 lg:py-8 md:mt-0 lg:flex-row justify-between items-start lg:items-center xl:px-0">
        <div className="border-t mt-6 w-full lg:w-auto lg:mt-0 lg:border-none text-sm text-left lg:text-center py-5 lg:py-0 text-muted-foreground">
          &copy; 2024 Radian OS LLC
        </div>
        <div className="flex flex-col lg:flex-row space-y-0 lg:space-x-8 text-sm lg:text-center text-muted-foreground w-full lg:w-auto">
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">About</a>
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">Pricing</a>
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">Blog</a>
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">Privacy Policy</a>
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">Terms of Service</a>
        </div>
        <div className="flex space-x-[1rem] py-3 lg:py-0 text-muted-foreground">
          <a href="#" className="">
          <Youtube />

          </a>
          <a href="#" className="">
            <Youtube />
          </a>
          <a href="#" className="">
          <Youtube />

          </a>
          <a href="#" className="">
          <Youtube />

          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer1