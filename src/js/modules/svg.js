export const showSvg = () => {
    const svgContainer = document.querySelector('.hero__svg')
    const svg = document.createElement('div');
    svg.className = 'rectangle-svg'
    svg.innerHTML = `
    <svg width="584" height="557" viewBox="0 0 584 557" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="static 1">
    <g id="Group 1">
    <path id="rectangle1" d="M112.984 288.058L108.337 355.913L178.115 360.431L182.762 292.578L112.984 288.058Z" fill="#DDDCDC"/>
    <path id="outline1" d="M67.9632 324.09L152.694 329.576L147.051 411.971L62.3206 406.483L67.9632 324.09ZM148.764 332.919L71.402 327.909L66.2498 403.139L143.612 408.149L148.764 332.919Z" fill="#64F4AC"/>
    <path id="rectangle2" d="M507.31 86.8507L438.937 101.137L453.628 167.624L522 153.338L507.31 86.8507Z" fill="#DDDCDC"/>
    <path id="outline2" d="M459.322 54.6468L477.159 135.381L394.137 152.728L376.296 71.9941L459.322 54.6468ZM472.776 132.625L456.486 58.9112L380.683 74.7503L396.97 148.464L472.776 132.625Z" fill="#64F4AC"/>
    <path id="rectangle3" d="M435.466 406.146L384.428 452.635L432.236 502.267L483.274 455.778L435.466 406.146Z" fill="#DDDCDC"/>
    <path id="outline3" d="M486.945 399.192L424.968 455.642L366.917 395.375L428.894 338.922L486.945 399.192ZM425.14 450.568L481.726 399.025L428.722 343.996L372.136 395.539L425.14 450.568Z" fill="#64F4AC"/>
    </g>
    </g>
    </svg> 
`
    svgContainer.appendChild(svg);
}