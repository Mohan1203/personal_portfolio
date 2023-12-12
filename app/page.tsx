import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper"
import About from "@/components/About"
import WorkProfile from "@/components/WorkProfile"

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col max-w-3xl mx-auto ">
        <About />
        <WorkProfile />
      </div>
    </MaxWidthWrapper>
  )
}
