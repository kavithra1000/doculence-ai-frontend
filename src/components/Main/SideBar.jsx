import { ListCollapse, ListXIcon, MoveRight, Search, SquarePen } from 'lucide-react';
import useExtractStore from '../../stores/useExtractStore';
import { useState } from 'react';
import { useEffect } from 'react';


function SideBar({ collapsed, setCollapse, smallScreen, setSmallScreen }) {

    const { actions } = useExtractStore()

    const [Actions, setActions] = useState(actions);

    useEffect(() => {
        setActions(actions)
    }, [actions]);


    return (
        <>
            <div className={`sidebar flex flex-col items-start h-screen border-r  dark:border-neutral-700 border-gray-300 transition-all ease-in-out duration-250 
            ${(collapsed || smallScreen) ? 'sm:w-13 w-0 overflow-hidden dark:bg-neutral-800' : 'w-50 bg-gray-100 dark:bg-neutral-900'}`}>

                {/* section 1 */}
                <div className={`section flex px-2 py-4 w-full`}>

                    <div className={`logo cursor-ew-resize dark:text-white rounded-lg p-2 flex flex-row hover:bg-gray-300 dark:hover:bg-neutral-700 transition-all duration-200 
                    ${collapsed ? 'mr-auto' : 'ml-auto'}`}
                        onClick={() => setCollapse(!collapsed)}>
                        <div className=''>
                            {collapsed ? <ListCollapse className='h-5 w-5' /> :
                                <ListXIcon className='h-5 w-5' />}
                        </div>
                    </div>

                </div>

                {/* section 2 */}
                <div className='section flex flex-col p-2 w-full gap-2 py-3.5'>

                    <div className='new gap-2 p-2 flex flex-row rounded-lg items-center hover:bg-gray-300 dark:hover:bg-neutral-700 transition-all duration-200 cursor-pointer'>
                        <div className=''>
                            <SquarePen className='h-5 w-5 dark:text-white' />
                        </div>
                        <div className={`transition-all duration-250 dark:text-white
                          text-sm font-semibold ${collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                            New
                        </div>

                    </div>

                    <div className='search hover:bg-gray-300 dark:hover:bg-neutral-700 gap-2 p-2 flex flex-row rounded-lg items-center transition-all duration-200 cursor-pointer'>
                        <div className=''>
                            <Search className='h-5 w-5 dark:text-white' />
                        </div>
                        <div className={`transition-all duration-250 dark:text-white
                          text-sm font-semibold ${collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                            Search
                        </div>
                    </div>


                </div>

                {/* section 4 */}
                <div className='section flex flex-col p-2 w-full gap-0 py-6'>

                    <div className='cursor-default search p-2 flex flex-row rounded-lg items-center transition-all duration-200'>

                        <div className={`transition-all duration-250 text-gray-500 
                          text-sm font-semibold ${collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                            Chat
                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-0 overflow-y-auto overflow-x-hidden'>
                        {Actions.map((Action, index) => (
                            <div
                                key={Action._id || index}
                                className='search dark:hover:bg-neutral-700 hover:bg-gray-300 gap-2 p-2 flex flex-row rounded-lg items-center transition-all duration-200 cursor-pointer'
                            >
                                <div
                                    className={`transition-all duration-250 whitespace-nowrap dark:text-white
        text-sm font-semibold ${collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}
                                >
                                    {Action.title.length > 20
                                        ? `${Action.title.slice(0, 20)}...`
                                        : Action.title}
                                </div>
                            </div>
                        ))}
                    </div>





                </div>



            </div>

            <SmallScreen collapsed={collapsed} setCollapse={setCollapse} smallScreen={smallScreen} setSmallScreen={setSmallScreen} />

            {smallScreen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40 sm:hidden transition-all duration-250 "
                    onClick={{/*() => setSmallScreen(false)*/ }}
                />
            )}

        </>
    )
}

export default SideBar;

function SmallScreen({ smallScreen, setSmallScreen }) {


    return (
        <div className={`fixed top-0 bottom-0 left-0 z-80 sidebar w-0 overflow-hidden sm:hidden  flex flex-col items-start h-screen border-r border-gray-300 transition-all ease-in-out duration-100 
        ${smallScreen && 'w-50 bg-gray-100'}`}>

            {/* section 1 */}
            <div className={`section flex px-2 py-4 w-full`}>

                <div className={`logo rounded-lg p-2 flex flex-row hover:bg-gray-300 ml-auto transition-all duration-200`}
                    onClick={() => setSmallScreen(!smallScreen)}>
                    <div className=''>
                        <ListXIcon className='h-5 w-5' />
                    </div>
                </div>

            </div>

            {/* section 2 */}
            <div className='section flex flex-col p-2 w-full gap-2 py-3.5'>

                <div className='new gap-2 p-2 flex flex-row rounded-lg items-center hover:bg-gray-300 transition-all duration-200'>
                    <div className=''>
                        <SquarePen className='h-5 w-5 ' />
                    </div>
                    <div className={`transition-all duration-250
                          text-sm font-semibold ${!smallScreen ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                        New
                    </div>

                </div>

                <div className='search hover:bg-gray-300 gap-2 p-2 flex flex-row rounded-lg items-center transition-all duration-200'>
                    <div className=''>
                        <Search className='h-5 w-5 ' />
                    </div>
                    <div className={`transition-all duration-250
                          text-sm font-semibold ${!smallScreen ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                        Search
                    </div>
                </div>


            </div>

            {/* section 3 */}
            <div className='section flex flex-col p-2 w-full gap-2 py-3.5'>

                <div className='new gap-2 p-2 flex flex-row rounded-lg items-center hover:bg-gray-300 transition-all duration-200'>
                    <div className=''>
                        <SquarePen className='h-5 w-5 ' />
                    </div>
                    <div className={`transition-all duration-250
                          text-sm font-semibold ${!smallScreen ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                        New
                    </div>

                </div>

                <div className='search hover:bg-gray-300 gap-2 p-2 flex flex-row rounded-lg items-center transition-all duration-200'>
                    <div className=''>
                        <Search className='h-5 w-5 ' />
                    </div>
                    <div className={`transition-all duration-250
                          text-sm font-semibold ${!smallScreen ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                        Search
                    </div>
                </div>


            </div>

        </div>
    )
}