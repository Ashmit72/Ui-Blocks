
import { Button } from '../ui/button'
import TitlePopover from './SimplePopover'
import IconTitlePopover from './IconTitlePopover'
import IconTitleTextPopover from './IconTItleTextPopover'
import IconTItleTextPopover2 from './IconTitleTextPopover2'
import FullScreenPopover from './FullWidthPopover'

function Navbar() {
    return (
        <nav className='px-6 py-2 max-w-screen-xl mx-auto'>
            <div className="flex items-center justify-between relative">
                <img src="Radian.png" alt="Logo" />
                <ul className='flex items-center justify-center gap-8'>
                    <li>
                        <IconTitlePopover />
                    </li>
                    <li>
                        <TitlePopover />
                    </li>
                    <li>
                        <IconTitleTextPopover />
                    </li>
                    <li>
                        <IconTItleTextPopover2 />
                    </li>
                    <li>
                        <FullScreenPopover />
                    </li>
                </ul>
                <div className='flex gap-2'>
                    <Button variant={"outline"}>Login</Button>
                    <Button>Get Started</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar