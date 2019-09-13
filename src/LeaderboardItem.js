const LeaderboardItem = ({UserId, CurrentLevel, PointTotal}) => (
    <div class="row">
        <div class="col-sm">
        {UserId}
        </div>
        <div class="col-sm">
        {CurrentLevel}
        </div>
        <div class="col-sm">
        {PointTotal}
        </div>
    </div>
  );