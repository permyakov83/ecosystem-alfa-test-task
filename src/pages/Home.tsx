import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import Main from "@/features/Main/Main"

const Home = () => {
  const [likeSwitch, setLikeSwitch] = useState(false)

  return (
    <div className="container mx-auto p-5">
      <h1 className="py-5 text-center text-3xl font-bold">Zabbix test</h1>
      <div className="overflow-hidden">
        <div className="flex gap-5">
          <Switch
            checked={likeSwitch}
            onClick={() => setLikeSwitch(!likeSwitch)}
          />
          <span>Показать карточки с лайком</span>
        </div>
        <Main />
      </div>
    </div>
  )
}

export default Home
