import * as React from "react"

function Check(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36.411}
      height={31.712}
      {...props}
    >
      <path
        d="M36.219 3.712L33.243.231A.606.606 0 0032.77 0a.582.582 0 00-.473.231L11.668 23.866 4.16 15.328a.6.6 0 00-.947 0l-3.01 3.423a.842.842 0 000 1.1L9.672 30.62a2.864 2.864 0 001.978 1.1 3.015 3.015 0 001.961-1.058h.017L36.235 4.816a.908.908 0 00-.016-1.104z"
        fill={props.fill}
      />
    </svg>
  )
}

export default Check
