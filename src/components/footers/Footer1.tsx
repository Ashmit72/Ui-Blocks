import { Youtube } from '@untitled-ui/icons-react'


const Footer1 = () => {
  return (
    <footer className="max-w-screen-xl w-full mx-auto border-t bg-background">
      <div className="flex flex-col-reverse  md:mt-0 md:flex-row justify-between items-start md:items-center md:py-8 px-6 xl:px-0 space-y-4 md:space-y-0">
        <div className="border-t mt-5 w-full md:w-auto md:mt-0 md:border-none text-sm text-left md:text-center py-5 md:py-0 text-muted-foreground">
          &copy; 2024 Radian OS LLC
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 text-sm md:text-center text-muted-foreground w-full lg:w-auto md:auto">
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">About</a>
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">Pricing</a>
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">Blog</a>
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">Privacy Policy</a>
          <a href="#" className="pt-3 pb-3 lg:pt-0 lg:pb-0">Terms of Service</a>
        </div>
        <div className="flex space-x-[1rem] pt-3 pb-3 lg:pt-0 lg:pb-0 text-muted-foreground w-full lg:w-auto md:w-auto">
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