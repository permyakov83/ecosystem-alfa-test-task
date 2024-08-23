import { facts, images } from "./moks"
import { DataMerging } from "./utils/dataMerging"
import CardList from "./components/CardList/CardList"
import "./App.css"

const App = () => {
  const data = DataMerging({ facts, images })

  return (
    <div className="container mx-auto p-5">
      <h1 className="py-5 text-3xl font-bold">Hello world!</h1>
      <div className="overflow-hidden rounded-[0.5rem] border shadow">
        <CardList data={data.data} />
      </div>
    </div>
  )
}

export default App
