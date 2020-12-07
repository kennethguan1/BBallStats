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
      
      // PLAYER CARD METHODS
      const addStats = (data) => {
        if (points[0].innerHTML === "PTS:") {
          // SET FIRST CARD DATA
          name[0].innerHTML = `${data.name}`
          wins[0].innerHTML = `${data.w}`
          losses[0].innerHTML = `${data.l}`
          points[0].innerHTML = `PTS: ${data.pts}`
          fieldGoal[0].innerHTML = `FG%: ${data.fg}`
          threePoint[0].innerHTML = `3P%: ${data.tp}`
          freeThrow[0].innerHTML = `FT%: ${data.ft}`
          rebounds[0].innerHTML = `REB: ${data.trb}`
          assists[0].innerHTML = `AST: ${data.ast}`
          steals[0].innerHTML = `STL: ${data.stl}`
          blocks[0].innerHTML = `BLK: ${data.blk}`
          turnovers[0].innerHTML = `TOV: ${data.tov}`
          fouls[0].innerHTML = `PF: ${data.pf}`

          name[0].classList.remove('hidden')
          wins[0].classList.remove('hidden')
          losses[0].classList.remove('hidden')

          teamLogo[0].style.backgroundImage = `url(${data.img})`
        } else if (points[1].innerHTML === "PTS:" && data.name !== name[0].innerHTML) {
          // SET 2ND CARD DATA
          name[1].innerHTML = `${data.name}`
          wins[1].innerHTML = `${data.w}`
          losses[1].innerHTML = `${data.l}`
          points[1].innerHTML = `PTS: ${data.pts}`
          fieldGoal[1].innerHTML = `FG%: ${data.fg}`
          threePoint[1].innerHTML = `3P%: ${data.tp}`
          freeThrow[1].innerHTML = `FT%: ${data.ft}`
          rebounds[1].innerHTML = `REB: ${data.trb}`
          assists[1].innerHTML = `AST: ${data.ast}`
          steals[1].innerHTML = `STL: ${data.stl}`
          blocks[1].innerHTML = `BLK: ${data.blk}`
          turnovers[1].innerHTML = `TOV: ${data.tov}`
          fouls[1].innerHTML = `PF: ${data.pf}`

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
        points[idx].innerHTML = "PTS:"
        fieldGoal[idx].innerHTML = "FG%:"
        threePoint[idx].innerHTML = "3P%:"
        freeThrow[idx].innerHTML = "FT%:"
        rebounds[idx].innerHTML = "REB:"
        assists[idx].innerHTML = "AST:"
        steals[idx].innerHTML = "STL:"
        blocks[idx].innerHTML = "BLK:"
        turnovers[idx].innerHTML = "TOV:"
        fouls[idx].innerHTML = "PF:"

        name[idx].classList.add('hidden')
        wins[idx].classList.add('hidden')
        losses[idx].classList.add('hidden')

        teamLogo[idx].style.backgroundImage = ""
      }

      // PLAYER BUTTONS
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