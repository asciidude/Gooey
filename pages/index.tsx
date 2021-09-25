export default function Home() {
  return (
      <div className="center">
          <section>
            <p className="bold">
              Gooey Progress
            </p>
            
            <div className="progress">
              <span className="progress" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></span>
            </div>
          </section>
        </div>
  )
}
