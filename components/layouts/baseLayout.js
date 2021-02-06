import Header from '../shared/Header'

function BaseLayout (props){
  const { className, children } = props
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout


// height :small
// footer
// position:relative