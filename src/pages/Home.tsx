import CardList from "../features/CardList/CardList"

const Home = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="py-5 text-center text-3xl font-bold">Zabbix test</h1>
      <div className="overflow-hidden">
        <CardList />
      </div>
    </div>
  )
}

export default Home
