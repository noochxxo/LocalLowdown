import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const Search = () => {
  return (
    <div
      className="
        flex
        mx-auto
        max-w-sm
        items-center
        space-x-2
        mt-8
      ">
      <Input type="text" placeholder="Battleford" />
      <Button type="submit">Search</Button>
    </div>
  )
}

export default Search