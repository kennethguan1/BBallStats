document.addEventListener('DOMContentLoaded', () => {
  d3.csv("src/data/19-20season.csv")
    .then(data => {
      // TEAM CARD ELEMENTS
      const teamLogo = Array.from(document.querySelectorAll('.team-logo'));
      
      const name = Array.from(document.querySelectorAll(".team-name"));
      const wins = Array.from(document.querySelectorAll(".wins"));
      const losses = Array.from(document.querySelectorAll(".losses"));
      const points = Array.from(document.querySelectorAll(".points"));
      const fieldGoal = Array.from(document.querySelectorAll(".field-goal"));
      const threePoint = Array.from(document.querySelectorAll(".three-point"));
      const freeThrow = Array.from(document.querySelectorAll(".free-throw"));
      const rebounds = Array.from(document.querySelectorAll(".rebounds"));
      const assists = Array.from(document.querySelectorAll(".assists"));
      const steals = Array.from(document.querySelectorAll(".steals"));
      const blocks = Array.from(document.querySelectorAll(".blocks"));
      const turnovers = Array.from(document.querySelectorAll(".turnovers"));
      const fouls = Array.from(document.querySelectorAll(".fouls"));
      
      // TEAM CARD METHODS
      const addStats = (data) => {
        if (points[0].innerHTML === "Points:") {
          // SET FIRST CARD DATA
          name[0].innerHTML = `${data.name}`
          wins[0].innerHTML = `${data.w}`
          losses[0].innerHTML = `${data.l}`
          points[0].innerHTML = `Points: ${data.pts}`
          fieldGoal[0].innerHTML = `Field Goal%: ${data.fg}`
          threePoint[0].innerHTML = `3 Points%: ${data.tp}`
          freeThrow[0].innerHTML = `Free Throw%: ${data.ft}`
          rebounds[0].innerHTML = `Rebounds: ${data.trb}`
          assists[0].innerHTML = `Assists: ${data.ast}`
          steals[0].innerHTML = `Steals: ${data.stl}`
          blocks[0].innerHTML = `Blocks: ${data.blk}`
          turnovers[0].innerHTML = `Turnovers: ${data.tov}`
          fouls[0].innerHTML = `Personal Fouls: ${data.pf}`

          name[0].classList.remove('hidden')
          wins[0].classList.remove('hidden')
          losses[0].classList.remove('hidden')

          teamLogo[0].style.backgroundImage = `url(${data.img})`
        } else if (points[1].innerHTML === "Points:" && data.name !== name[0].innerHTML) {
          // SET 2ND CARD DATA
          name[1].innerHTML = `${data.name}`
          wins[1].innerHTML = `${data.w}`
          losses[1].innerHTML = `${data.l}`
          points[1].innerHTML = `Points: ${data.pts}`
          fieldGoal[1].innerHTML = `Field Goal%: ${data.fg}`
          threePoint[1].innerHTML = `3 Points%: ${data.tp}`
          freeThrow[1].innerHTML = `Free Throw%: ${data.ft}`
          rebounds[1].innerHTML = `Rebounds: ${data.trb}`
          assists[1].innerHTML = `Assists: ${data.ast}`
          steals[1].innerHTML = `Steals: ${data.stl}`
          blocks[1].innerHTML = `Blocks: ${data.blk}`
          turnovers[1].innerHTML = `Turnovers: ${data.tov}`
          fouls[1].innerHTML = `Personal Fouls: ${data.pf}`

          name[1].classList.remove('hidden')
          wins[1].classList.remove('hidden')
          losses[1].classList.remove('hidden')

          teamLogo[1].style.backgroundImage = `url(${data.img})`
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
        name[idx].innerHTML = ""
        wins[idx].innerHTML = ""
        losses[idx].innerHTML = ""
        points[idx].innerHTML = "Points:"
        fieldGoal[idx].innerHTML = "Field Goal%:"
        threePoint[idx].innerHTML = "3 Points%:"
        freeThrow[idx].innerHTML = "Free Throw%:"
        rebounds[idx].innerHTML = "Rebounds:"
        assists[idx].innerHTML = "Assists:"
        steals[idx].innerHTML = "Steals:"
        blocks[idx].innerHTML = "Blocks:"
        turnovers[idx].innerHTML = "Turnovers:"
        fouls[idx].innerHTML = "Personal Fouls:"

        name[idx].classList.add('hidden')
        wins[idx].classList.add('hidden')
        losses[idx].classList.add('hidden')

        teamLogo[idx].style.backgroundImage = ""
      }

      // TEAM BUTTONS
      const buttons = Array.from(document.querySelectorAll('.team-button'));

      buttons.forEach(button => {
        const idx = data.indexOf(data.find(el => el.name === button.innerHTML))
        button.addEventListener("click", () => {
          if (name[0].innerHTML  === data[idx].name) {
            closeStats(0);
            button.classList.remove('active');
          } else if (name[1].innerHTML  === data[idx].name) {
            closeStats(1);
            button.classList.remove('active');
          } else {
            if (!name[0].innerHTML || !name[1].innerHTML) {
              button.classList.add('active');
            }
      
            addStats(data[idx]);
          }
        });
      });
    });
})