import config from "./config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    //  backgroundColor: "red" 
  };
  // console.log(config.playlist);

  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>

        <Menu />
        <Header />
        <Timeline playlists={config.playlists} >
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage

//   function Menu(){
//     return(
//     <div>
//         Menu
//     </div>
//     )
//   }

const StyledHeader = styled.div`
    img{
      height: 342px;
      width: 1512px;
      left: 0px;
      top: 56px;
      border-radius: 0px;
    }
    .user-info > img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 20px;
    }
  `;

function Header() {
  return (
    <StyledHeader>
      
      <img className="banner" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" />  
     
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(props) {
  // console.log("Dentro do Componente", props.playlists);
  const playlistNames = Object.keys(props.playlists);

  // Statement
  // Retorno por expressão

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];

        return (
          <section>
            <h2>{playlistName}</h2>

            <div>
              {videos.map((video) => {
                return (

                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )

              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}