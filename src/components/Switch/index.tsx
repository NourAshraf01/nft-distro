type SwitchProps = {
    enabled: boolean;
    trigger: Function
}

const Switch = ({ enabled, trigger }: SwitchProps) => {
    return (
      <div
        className="flex h-[25px] w-[46px] cursor-pointer rounded-[12.5px] bg-[#151515] p-[2px] dark:bg-white"
        onClick={() => trigger()}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${
            enabled ? 'flex-grow' : 'flex-grow-0'
          }`}
        ></div>
        <div
          className={`h-[20.7px] w-[20.7px] rounded-full pink-gradient transition-all duration-300 ease-in-out switch-shadow ${
            enabled ? 'dark:bg-[#151515]' : 'dark:bg-white'
          }`}
        ></div>
      </div>
    );
  };

export default Switch;