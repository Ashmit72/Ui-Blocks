import { Youtube } from '@untitled-ui/icons-react'


const Footer1 = () => {
  return (
    <footer className="max-w-screen-xl w-full mx-auto border-t bg-background">
      <div className="flex flex-col-reverse mt-6 md:mt-0 md:flex-row justify-between items-start md:items-center md:py-8 px-6 xl:px-0 space-y-4 md:space-y-0">
        <div className="border-t mt-5 w-full md:w-auto md:mt-0 md:border-none text-sm text-left md:text-center py-5 md:py-0 text-muted-foreground">
          &copy; 2024 Radian OS LLC
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm md:text-center text-muted-foreground">
          <a href="#" className="">About</a>
          <a href="#" className="">Pricing</a>
          <a href="#" className="">Blog</a>
          <a href="#" className="">Privacy Policy</a>
          <a href="#" className="">Terms of Service</a>
        </div>
        <div className="flex space-x-[1rem] text-muted-foreground">
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