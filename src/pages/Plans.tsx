import './vdashboard.css';


const Plans: React.FC = () => {

return (
    <>
    <header>
        <h1>Plans</h1>
      </header>
    <div className="wrap">
        <div className="app">
            <a href="/agent-home">Back</a>
            <div className="reminders">
            <div className="fullWidth">
                <div className="todo"><i className="fa fa-clock-o"></i><span>Basic</span>
                <p>Plan - 500 INR</p>
                <div className="line"></div>
                <h4><a href="/agent-profile">Upgrade</a></h4>
                </div>
                <div className="todo"><i className="fa fa-clock-o"></i><span style={{"fontSize": "36pt"}}>Pro</span>
                <p>Plan - 900 INR</p>
                <div className="line"></div>
                <h4><a href="/agent-profile">Upgrade</a></h4>
                </div>
                <div className="todo"><i className="fa fa-clock-o"></i><span style={{"fontSize": "28pt"}}>Business</span>
                <p>Plan - 1500 INR</p>
                <div className="line"></div>
                <h4><a href="/agent-profile">Upgrade</a></h4>
                </div>
            </div>
            </div>
            
            <div className="empty"></div>
        </div>
        {/* <div className="tabs">
            <div className="tab"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1512744912/feed_fmytit.svg"/></div>
            <div className="tab"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1512744911/cal_cexot2.svg"/></div>
            <div className="tab"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1512744913/msg_owdthq.svg"/></div>
            <div className="tab"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1512744914/user_xszplu.svg"/></div>
        </div> */}
        </div>
    </>
)
};

export default Plans;