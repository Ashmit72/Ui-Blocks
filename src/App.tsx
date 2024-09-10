import { ThemeProvider } from './providers/ThemeProvider'
import SideBar from './components/SideBar'
import NavbarViewer from './components/liveViewer/navbarViewer'
import { ComponentProvider } from './providers/ComponentProvider'
import HeroViewer from './components/liveViewer/heroViewer'
import CTAViewer from './components/liveViewer/ctaViewer'
import FooterViewer from './components/liveViewer/footerViewer'
import FAQViewer from './components/liveViewer/faqViewer'
import SocialProofViewer from './components/liveViewer/socialProofCompanies'
import FeaturesViewer from './components/liveViewer/featuresViewer'
import TestimonialViewer from './components/liveViewer/testimonialsViewer'
import PricingViewer from './components/liveViewer/pricingViewer'
import SignInViewer from './components/liveViewer/signInViewer'
import SignUpViewer from './components/liveViewer/signUpViewer'
import VerifyEmailSentViewer from './components/liveViewer/verifyEmailSentViewer'
import AccountVerifiedViewer from './components/liveViewer/accountVerifiedViewer'
import VerificationLinkExpiredViewer from './components/liveViewer/verificationLinkExpired'
import VerifyEmailCodeViewer from './components/liveViewer/verifyEmailCode'
import ForgotPasswordViewer from './components/liveViewer/forgotPasswordViewer'
import ResetEmailSentViewer from './components/liveViewer/resetEmailSentViewer'


function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ComponentProvider>
        <NavbarViewer />
        <HeroViewer />
        <SocialProofViewer />
        <FeaturesViewer />
        <TestimonialViewer />
        <PricingViewer />
        <FAQViewer />
        <CTAViewer />
        <SignInViewer/>
        <SignUpViewer/>
        <VerifyEmailSentViewer/>
        <AccountVerifiedViewer/>
        <VerificationLinkExpiredViewer/>
        <VerifyEmailCodeViewer/>
        <ForgotPasswordViewer/>
        <ResetEmailSentViewer/>
        <FooterViewer />
        <SideBar />
      </ComponentProvider>
    </ThemeProvider>
  )
}

export default App
