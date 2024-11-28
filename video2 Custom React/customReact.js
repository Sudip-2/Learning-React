const mainContainer = document.getElementById('root')
let reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Visit Google"
}
customRender(reactElement,mainContainer)

function customRender(reactElement,container){
    let domElement = document.createElement(reactElement.type);
    console.log(domElement)
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    for (const key in reactElement.props) {
        domElement.setAttribute(key,reactElement.props[key])
    }
    container.appendChild(domElement)
}