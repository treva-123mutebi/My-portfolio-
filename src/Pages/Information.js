import CODbutton from '../Components/CODbutton'
import backgroundGif from '../Images/noise.gif'

export default function Information() {
  const TimeLine = [
    {
      company: 'Ekaleerwe',
      position: 'Full Stack Developer',
      startedAt: '01/08/2021'
    },
    {
      company: 'Yellowbird',
      position: 'Developer',
      startedAt: '01/08/2020'
    },
    {
      company: 'USAID',
      position: 'Developer',
      startedAt: '01/01/2018'
    }
  ]

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full opacity-30 z-50 pointer-events-none h-full"
        style={{
          backgroundImage: `url(${backgroundGif})`
        }}
      />
      <div className="container h-screen mx-auto bg-black">
        <div className="w-full flex flex-wrap justify-start content-start p-5">
          <div className="w-full flex flex-wrap justify-start content-start p-0 my-10">
            <CODbutton buttonText="BACK" link="/" />
          </div>
          <h1
            className="text-3xl w-full font-pop font-medium text-gray-300 p-0 m-0"
            style={{ letterSpacing: '5px' }}
          >
           Profile.
          </h1>
          <span
            className="desc w-full overflow-hidden transition-all duration-300 text-sm uppercase text-zinc-400"
            style={{
              letterSpacing: '10px'
            }}
          >
            PERSONAL INFORMATION
          </span>
          <div className="w-full operator-information flex flex-wrap justify-start text-sm mt-5 text-zinc-400">
            <table>
              <tbody>
                <tr>
                  <td>NAME / SURNAME</td>
                  <td className="line-through">CLASSIFIED</td>
                </tr>
                <tr>
                  <td>STATUS</td>
                  <td> FREELANCING </td>
                </tr>
                
                
                <tr>
                  <td>LOCATION</td>
                  <td>Kampala, Uganda</td>
                </tr>
                <tr>
                  <td>LOCAL TIME</td>
                  <td>GMT +3</td>
                </tr>
               
              </tbody>
            </table>
          </div>
          <span
            className="desc mt-16 w-full overflow-hidden transition-all duration-300 text-sm uppercase text-zinc-400"
            style={{
              letterSpacing: '10px'
            }}
          >
            WORK TIMELINE
          </span>
          <div className="w-full flex flex-wrap mt-2 justify-start content-start">
            {TimeLine.map((timeline, x) => (
              <div
                key={timeline.company}
                className="timeline relative w-full p-4 pt-2 pb-10"
              >
                <span className="absolute timeline-dot top-3 -left-2 w-5 h-5 bg-neutral-600 rounded-full">
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black">
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-600"></span>
                  </span>
                </span>
                <span
                  className={`absolute timeline-line top-3 ${
                    x === TimeLine.length - 1
                      ? 'bg-gradient-to-b from-neutral-600 to-black'
                      : 'bg-neutral-600'
                  }  h-full w-px`}
                ></span>
                <p className="w-full pl-2 timeline-header text-sm text-zinc-400 p-0 m-0 font-bold uppercase">
                  {timeline.company}
                </p>
                <p
                  className="w-full pl-2 timeline-header text-xs text-zinc-400 p-0 m-0 font-normal uppercase"
                  style={{ letterSpacing: '2px' }}
                >
                  {timeline.position}
                </p>
                <p className="w-full pl-2 pt-4 timeline-header text-xs text-zinc-400 p-0 m-0 font-normal uppercase">
                  STARTED AT :<b> {timeline.startedAt}</b>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
