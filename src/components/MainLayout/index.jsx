import './mainlayout.sass'
import { useSelector } from 'react-redux';

const MainLayout = () => {

  const userName = useSelector((state) => state.user.userName)

  return (
      <div className="container-flud">
        <nav className="app-navbar navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">TenHoursLab Workrequest  </a>
          <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">


            {userName?
              <div>
                <span className="color-light-gray mr-2">{userName}</span> <a href="#" click="logout()" className="pr-3">Logout</a>
              </div>
              :
              null
            }

          </div>
        </nav>
      </div>
    
  );
}

export default MainLayout;
