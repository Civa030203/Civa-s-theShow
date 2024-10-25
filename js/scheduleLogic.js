var cursor = document.getElementById('scheduleEntry');
var teamSelectCursor = document.getElementById('teamSelect');
var monSelectCursor = document.getElementById('monthSelect');
var teamValue = teamSelectCursor.value;
var monthVal = monSelectCursor.value;
var data = gameData;

let printScheduleInfo = () => {
    if (Number(teamValue) == 11) data = ksGameData;
    var t = '<colgroup><col width="107"><col width="150"><col width="125"><col width="75"><col width="125"><col width="150"><col width="100"><col width = "50"></colgroup><tbody>';
    for (var i = 0; i < data.length; i++) {
        t += '<tr><td rowspan="' + Number(data[i].length - 1) + '"><strong>' + data[i][0] + '</strong>(' + data[i][1] + ')</td>';

        for (var j = 2; j < Number(data[i].length); j++) {
            t += '<tr><td width = 100>' + data[i][j][5] + '</td><td style="background: linear-gradient(to right, rgb(' + teamInfos[Number(data[i][j][0] - 1)][5] + '), rgb(' + teamInfos[Number(data[i][j][0] - 1)][4] + ')); color: rgb(238, 238, 238);"><img src = "https://statiz.sporki.com/data/team/ci/' + teamInfos[Number(data[i][j][0] - 1)][2] + '/' + teamInfos[Number(data[i][j][0] - 1)][1] + '.svg" width = "50" height = "50"></img></td><td bgcolor = ';

            if (Number(data[i][j][2]) > Number(data[i][j][3])) // 색깔
                t += teamInfos[Number(data[i][j][0] - 1)][3];
            else if (Number(data[i][j][2]) == Number(data[i][j][3]))
                t += "#FFFFFF";
            else
                t += teamInfos[Number(data[i][j][1] - 1)][3];

            if (Number(data[i][j][2]) == Number(data[i][j][3]))
                t += '><p style="color:black;">';
            else
                t += '><p style="color:white;">';

            if (Number(data[i][j][2]) > Number(data[i][j][3])) // 점수 악센트
                t += '<b>' + data[i][j][2] + '</b> : ' + data[i][j][3];
            else if (Number(data[i][j][2]) == Number(data[i][j][3]))
                t += data[i][j][2] + ' : ' + data[i][j][3];
            else
                t += data[i][j][2] + ' : <b>' + data[i][j][3] + '</b>';

            t += '<br>' + data[i][j][4] + '</p></td><td style="background: linear-gradient(to right, rgb(' + teamInfos[Number(data[i][j][1] - 1)][4] + '), rgb(' + teamInfos[Number(data[i][j][1] - 1)][5] + ')); color: rgb(238, 238, 238);"><img src = "https://statiz.sporki.com/data/team/ci/' + teamInfos[Number(data[i][j][1] - 1)][2] + '/' + teamInfos[Number(data[i][j][1] - 1)][1] + '.svg" width = "50" height = "50"></img></td><td width = 100>' + data[i][j][6] + '</td><td>';

            if (data[i][j][8])
                t += '<a href="game/' + data[i][j][11] + '/preview.html" onclick="clickcr(this, "sch.gamerecord", "", "", event);"><img width="61" height="23" alt="경기결과" src="https://ssl.pstatic.net/static/sports/2021/pc/04/08/btn_power.gif"></a>';
            if (data[i][j][9])
                t += '<a href="game/' + data[i][j][11] + '/relay.html" onclick="clickcr(this, "sch.gamerecord", "", "", event);"><img width="61" height="23" alt="경기결과" src="https://imgnews.pstatic.net/image/sports/2011/baseball_schedule/btn_result2.gif"></a>';
            if (data[i][j][10])
                t += '<a href="game/' + data[i][j][11] + '/video.html" onclick="clickcr(this, "sch.gamevod", "", "", event);"><img width="61" height="23" alt="경기영상" src="https://imgnews.pstatic.net/image/sports/2010/kbo_schedule/btn_vod2.gif"></a>';

            t += '</td><td><span class="td_stadium">' + data[i][j][7] + '</span></td></tr></tr>';
        }
    }

    cursor.innerHTML = t;
}

let updateScheduleInfo = () => {
  teamValue = teamSelectCursor.value;
  if (teamValue == 11) data = ksGameData;
  else data = gameData;
  var t = '<colgroup><col width="107"><col width="150"><col width="125"><col width="75"><col width="125"><col width="150"><col width="100"><col width = "50"></colgroup><tbody>';
  for (var i = 0; i < data.length; i++) {
      if (Number(teamValue) == 0 || Number(teamValue) == 11)
          t += '<tr><td rowspan="' + Number(data[i].length - 1) + '"><strong>' + data[i][0] + '</strong>(' + data[i][1] + ')</td>';
      else
          t += '<tr><td><strong>' + data[i][0] + '</strong>(' + data[i][1] + ')</td>';
      for (var j = 2; j < Number(data[i].length); j++) {
          console.log(teamValue);
          if (Number(teamValue) > 0 && Number(teamValue) < 11) {
              if (data[i][j][0] == Number(teamValue) || data[i][j][1] == Number(teamValue)) {
                  t += '<td width = 100>' + data[i][j][5] + '</td><td style="background: linear-gradient(to right, rgb(' + teamInfos[Number(data[i][j][0] - 1)][5] + '), rgb(' + teamInfos[Number(data[i][j][0] - 1)][4] + ')); color: rgb(238, 238, 238);"><img src = "https://statiz.sporki.com/data/team/ci/' + teamInfos[Number(data[i][j][0] - 1)][2] + '/' + teamInfos[Number(data[i][j][0] - 1)][1] + '.svg" width = "50" height = "50"></img></td><td bgcolor = ';

                  if (Number(data[i][j][2]) > Number(data[i][j][3])) // 색깔
                      t += teamInfos[Number(data[i][j][0] - 1)][3];
                  else if (Number(data[i][j][2]) == Number(data[i][j][3]))
                      t += "#FFFFFF";
                  else
                      t += teamInfos[Number(data[i][j][1] - 1)][3];

                  if (Number(data[i][j][2]) == Number(data[i][j][3]))
                      t += '><p style="color:black;">';
                  else
                      t += '><p style="color:white;">';

                  if (Number(data[i][j][2]) > Number(data[i][j][3])) // 점수 악센트
                      t += '<b>' + data[i][j][2] + '</b> : ' + data[i][j][3];
                  else if (Number(data[i][j][2]) == Number(data[i][j][3]))
                      t += data[i][j][2] + ' : ' + data[i][j][3];
                  else
                      t += data[i][j][2] + ' : <b>' + data[i][j][3] + '</b>';

                  t += '<br>' + data[i][j][4] + '</p></td><td style="background: linear-gradient(to right, rgb(' + teamInfos[Number(data[i][j][1] - 1)][4] + '), rgb(' + teamInfos[Number(data[i][j][1] - 1)][5] + ')); color: rgb(238, 238, 238);"><img src = "https://statiz.sporki.com/data/team/ci/' + teamInfos[Number(data[i][j][1] - 1)][2] + '/' + teamInfos[Number(data[i][j][1] - 1)][1] + '.svg" width = "50" height = "50"></img></td><td width = 100>' + data[i][j][6] + '</td><td>';

                  if (data[i][j][8])
                      t += '<a href="game/' + data[i][j][11] + '/preview.html" onclick="clickcr(this, "sch.gamerecord", "", "", event);"><img width="61" height="23" alt="경기결과" src="https://ssl.pstatic.net/static/sports/2021/pc/04/08/btn_power.gif"></a>';
                  if (data[i][j][9])
                      t += '<a href="game/' + data[i][j][11] + '/relay.html" onclick="clickcr(this, "sch.gamerecord", "", "", event);"><img width="61" height="23" alt="경기결과" src="https://imgnews.pstatic.net/image/sports/2011/baseball_schedule/btn_result2.gif"></a>';
                  if (data[i][j][10])
                      t += '<a href="game/' + data[i][j][11] + '/video.html" onclick="clickcr(this, "sch.gamevod", "", "", event);"><img width="61" height="23" alt="경기영상" src="https://imgnews.pstatic.net/image/sports/2010/kbo_schedule/btn_vod2.gif"></a>';

                  t += '</td><td><span class="td_stadium">' + data[i][j][7] + '</span></td></tr></tr>';
              }
          } else {
              t += '<tr><td width = 100>' + data[i][j][5] + '</td><td style="background: linear-gradient(to right, rgb(' + teamInfos[Number(data[i][j][0] - 1)][5] + '), rgb(' + teamInfos[Number(data[i][j][0] - 1)][4] + ')); color: rgb(238, 238, 238);"><img src = "https://statiz.sporki.com/data/team/ci/' + teamInfos[Number(data[i][j][0] - 1)][2] + '/' + teamInfos[Number(data[i][j][0] - 1)][1] + '.svg" width = "50" height = "50"></img></td><td bgcolor = ';

              if (Number(data[i][j][2]) > Number(data[i][j][3])) // 색깔
                  t += teamInfos[Number(data[i][j][0] - 1)][3];
              else if (Number(data[i][j][2]) == Number(data[i][j][3]))
                  t += "#FFFFFF";
              else
                  t += teamInfos[Number(data[i][j][1] - 1)][3];

              if (Number(data[i][j][2]) == Number(data[i][j][3]))
                  t += '><p style="color:black;">';
              else
                  t += '><p style="color:white;">';

              if (Number(data[i][j][2]) > Number(data[i][j][3])) // 점수 악센트
                  t += '<b>' + data[i][j][2] + '</b> : ' + data[i][j][3];
              else if (Number(data[i][j][2]) == Number(data[i][j][3]))
                  t += data[i][j][2] + ' : ' + data[i][j][3];
              else
                  t += data[i][j][2] + ' : <b>' + data[i][j][3] + '</b>';

              t += '<br>' + data[i][j][4] + '</p></td><td style="background: linear-gradient(to right, rgb(' + teamInfos[Number(data[i][j][1] - 1)][4] + '), rgb(' + teamInfos[Number(data[i][j][1] - 1)][5] + ')); color: rgb(238, 238, 238);"><img src = "https://statiz.sporki.com/data/team/ci/' + teamInfos[Number(data[i][j][1] - 1)][2] + '/' + teamInfos[Number(data[i][j][1] - 1)][1] + '.svg" width = "50" height = "50"></img></td><td width = 100>' + data[i][j][6] + '</td><td>';

              if (data[i][j][8])
                  t += '<a href="game/' + data[i][j][11] + '/preview.html" onclick="clickcr(this, "sch.gamerecord", "", "", event);"><img width="61" height="23" alt="경기결과" src="https://ssl.pstatic.net/static/sports/2021/pc/04/08/btn_power.gif"></a>';
              if (data[i][j][9])
                  t += '<a href="game/' + data[i][j][11] + '/relay.html" onclick="clickcr(this, "sch.gamerecord", "", "", event);"><img width="61" height="23" alt="경기결과" src="https://imgnews.pstatic.net/image/sports/2011/baseball_schedule/btn_result2.gif"></a>';
              if (data[i][j][10])
                  t += '<a href="game/' + data[i][j][11] + '/video.html" onclick="clickcr(this, "sch.gamevod", "", "", event);"><img width="61" height="23" alt="경기영상" src="https://imgnews.pstatic.net/image/sports/2010/kbo_schedule/btn_vod2.gif"></a>';

              t += '</td><td><span class="td_stadium">' + data[i][j][7] + '</span></td></tr>';
          }
      }
  }

  cursor.innerHTML = t;
}
