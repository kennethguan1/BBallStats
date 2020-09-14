document.addEventListener("DOMContentLoaded", () => {
  d3.csv("src/data/18-19season.csv").then((data) => {                                            //data = promise => [{team: Boston Celtics, pts: 25...}, {}]
    // 18-19 Season variables
    const teamLogo = Array.from(document.querySelectorAll(".team-logo"));

    const name = Array.from(document.querySelectorAll(".team-name"));                       // [div.team-name.hidden, div.team-name.hidden]
    const rank = Array.from(document.querySelectorAll(".team-rank"));
    const wins = Array.from(document.querySelectorAll(".team-wins"));
    const losses = Array.from(document.querySelectorAll(".team-losses"));
    const points = Array.from(document.querySelectorAll(".points"));
    const fieldgoal = Array.from(document.querySelectorAll(".field-goal%"));
    const threepoint = Array.from(document.querySelectorAll(".3-point%"));
    const freethrow = Array.from(document.querySelectorAll(".free-throw%"));
    const rebounds = Array.from(document.querySelectorAll(".rebounds"));
    const assists = Array.from(document.querySelectorAll(".assists"));
    const steals = Array.from(document.querySelectorAll(".steals"));
    const blocks = Array.from(document.querySelectorAll(".blocks"));
    const turnovers = Array.from(document.querySelectorAll(".turnovers"));
    const fouls = Array.from(document.querySelectorAll(".fouls"));

    // PLAYER CARD METHODS
    const showStats = (data) => {
      if (points[0].innerHTML === "PTS:" && data.team !== name[1].innerHTML) {        //?
        // SET FIRST CARD DATA
        name[0].innerHTML = `${data.Team}`;
        // rank[0].innerHTML = `${data.pos}`;
        // wins[0].innerHTML = `${data.ht}`;
        // losses[0].innerHTML = `${data.ht}`;
        points[0].innerHTML = `PTS: ${data.PTS}`;
        fieldgoal[0].innerHTML = `FG%: ${data.FG%}`;
        threepoint[0].innerHTML = `3P%: ${data["3P%"]}`;
        freethrow[0].innerHTML = `FT%: ${data.FT%}`;
        rebounds[0].innerHTML = `TRB: ${data.TRB}`;
        assists[0].innerHTML = `AST: ${data.AST}`;
        steals[0].innerHTML = `STL: ${data.STL}`;
        blocks[0].innerHTML = `BLK: ${data.BLK}`;
        turnovers[0].innerHTML = `TOV: ${data.TOV}`;
        fouls[0].innerHTML = `PF: ${data.PF}`;

        name[0].classList.remove("hidden");
        // rank[0].classList.remove("hidden");
        // wins[0].classList.remove("hidden");
        // losses[0].classList.remove("hidden");

        

        teamLogo[0].style.backgroundImage = `url(${data.img})`;     //need to add image to season.csv
      } else if (
        points[1].innerHTML === "PTS:" &&
        data.team !== name[0].innerHTML
      ) {
        // SET 2ND CARD DATA
        name[1].innerHTML = `${data.Team}`;
        // rank[1].innerHTML = `${data.pos}`;
        // wins[1].innerHTML = `${data.ht}`;
        // losses[1].innerHTML = `${data.ht}`;
        points[1].innerHTML = `PTS: ${data.PTS}`;
        fieldgoal[1].innerHTML = `FG%: ${data.FG %}`;
        threepoint[1].innerHTML = `3P%: ${data["3P%"]}`;
        freethrow[1].innerHTML = `FT%: ${data.FT %}`;
        rebounds[1].innerHTML = `TRB: ${data.TRB}`;
        assists[1].innerHTML = `AST: ${data.AST}`;
        steals[1].innerHTML = `STL: ${data.STL}`;
        blocks[1].innerHTML = `BLK: ${data.BLK}`;
        turnovers[1].innerHTML = `TOV: ${data.TOV}`;
        fouls[1].innerHTML = `PF: ${data.PF}`;

        name[1].classList.remove("hidden");
        // rank[1].classList.remove("hidden");
        // wins[1].classList.remove("hidden");
        // losses[1].classList.remove("hidden");

        teamLogo[1].style.backgroundImage = `url(${data.img})`;   //need to add image to season.csv
      }
      // else {
      //   // REPLACE 2ND CARD DATA
      //   if (name[0].innerHTML !== data.name) {
      //     name[1].innerHTML = `${data.name}`
      //     position[1].innerHTML = `${data.pos}`
      //     height[1].innerHTML = `${data.ht}`
      //     points[1].innerHTML = `PTS: ${data.pts}`
      //     rebounds[1].innerHTML = `REB: ${data.reb}`
      //     assists[1].innerHTML = `AST: ${data.ast}`
      //     steals[1].innerHTML = `STL: ${data.stl}`
      //     blocks[1].innerHTML = `BLK: ${data.blk}`
      //     turnovers[1].innerHTML = `TO: ${data.to}`
      //   }
      // }
    };

    const closeStats = (idx) => {
      name[idx].innerHTML = "";
      rank[idx].innerHTML = "";
      wins[idx].innerHTML = "";
      losses[idx].innerHTML = "";
      points[idx].innerHTML = "PTS:";
      rebounds[idx].innerHTML = "REB:";
      assists[idx].innerHTML = "AST:";
      steals[idx].innerHTML = "STL:";
      blocks[idx].innerHTML = "BLK:";
      turnovers[idx].innerHTML = "TO:";

      name[idx].classList.add("hidden");
      position[idx].classList.add("hidden");
      height[idx].classList.add("hidden");

      playerImg[idx].style.backgroundImage = "";
    };

    // PLAYER BUTTONS
    const buttons = Array.from(document.querySelectorAll(".player-button"));

    buttons.forEach((button) => {
      const idx = data.indexOf(data.find((el) => el.name === button.innerHTML));

      button.addEventListener("click", () => {
        if (name[0].innerHTML === data[idx].name) {
          closeStats(0);
          button.classList.remove("active");
        } else if (name[1].innerHTML === data[idx].name) {
          closeStats(1);
          button.classList.remove("active");
        } else {
          if (!name[0].innerHTML || !name[1].innerHTML) {
            button.classList.add("active");
          }

          addStats(data[idx]);
        }
      });
    });
  });
});
