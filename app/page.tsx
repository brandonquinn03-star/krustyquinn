import Link from 'next/link'

export default async function Page(){
  const inv = { left: 60 }
  const menu = {
    week: {
      title: 'Two pies only',
      subtitle: 'Rotates weekly — keep notifications on',
      pies: [
        { id: 'margherita', name:'Margherita', desc:'Tomato, mozzarella, basil' },
        { id: 'hot-honey-pep', name:'Hot Honey Pepperoni', desc:'Mozzarella, cup & char pepperoni, hot honey' },
      ]
    }
  }
  const nextDrop = '12:00 PM'
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <p className="uppercase text-xs tracking-widest opacity-70">This week&apos;s pies</p>
        <h2 className="text-3xl font-bold mt-2">{menu.week.title}</h2>
        <p className="opacity-80">{menu.week.subtitle}</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {menu.week.pies.map((p) => (
            <div key={p.id} className="bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800">
              <div className="aspect-square bg-zinc-900" />
              <div className="p-4">
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-sm opacity-70">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="text-2xl font-bold">{inv.left} left</div>
          <Link href="/order" className="btn">Reserve Pizza</Link>
        </div>
        <p className="text-xs mt-2 opacity-70">Orders open at <strong>12:00 PM</strong>. Next drop: {nextDrop}</p>
      </section>
    </main>
  )
}
