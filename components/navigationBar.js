import { useEffect, useState } from "react";

const NavigationBar = ({ }) => {

  const [toggle, setToogle] = useState(true);

  useEffect(() => {

    if ((localStorage.getItem('theme') === 'dark')) {
      console.log("It's dark..");
      document.documentElement.classList.add('dark');
      setToogle(false);
    }
    else if ((localStorage.getItem('theme') === 'light')) {
      console.log("It's light..");
      document.documentElement.classList.remove('dark');
      setToogle(true);
    }
    else if ((localStorage.getItem('theme') == undefined)) {
      console.log("No theme set.. making it dark");
    }
  }, [])

  return (

    <div className={`my-4 col-start-1 col-end-8 row-start-1 row-end-2 grid grid-cols-[100px,1fr,50px] shadow-md dark:shadow-[#181f32] bg-[#DBE6F6] dark:bg-[#1e293b] animate-fade`} >

      <a className={`inline justify-self-start self-center group ml-4`} href={"/"}>
        <p className={`inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-light text-lg ml-1 group-hover:text-[#F43B5F]`}>{"<"}</p>
        <p className={`inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-black text-lg ml-1 group-hover:m-2`}>{"Ibrahim"}</p>
        <p className={`inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-light text-lg ml-1 group-hover:text-[#F43B5F] `}>{"/>"}</p>
      </a>

      <span className={`cols-start-3 col-end-4 self-center justify-self-center`}>
        <label
          className="container"
          // title={"Activate dark mode"}
          // aria-label={"Activate dark mode"}
        >
          <input
            type="checkbox"
            checked={toggle}
            onChange={() => {
              if ((localStorage.getItem('theme') === 'dark')) {
                console.log("It's dark.. switiching to light")
                localStorage.setItem('theme', 'light');
                document.documentElement.classList.remove('dark')
                setToogle(true);
              }
              else if ((localStorage.getItem('theme') === 'light')) {
                console.log("It's light.. switiching to dark")
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
                setToogle(false);
              }
              else if ((localStorage.getItem('theme') == undefined)) {
                console.log("No theme set.. making it dark")
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark');
                setToogle(false)
              }
            }}
          />
          <div />
        </label>
      </span>


    </div >
  )
}

export default NavigationBar;