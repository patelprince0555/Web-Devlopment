import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
export default function InfoBox(){
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let info={
        city:"patna",
        feelslike:24.24,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    };

    return(
        <div className="InfoBox">
            <h1>WeatherInfo--{info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature={info.temp}&deg;c</p>
            <p>Humidity={info.humidity}</p>
            <p>Min Temperature={info.tempMin}&deg;c</p>
            <p>Max Temperature={info.tempMax}&deg;c</p>
            <p>
                The Weather can be described as <b>{info.weather}</b> and feels
                like {info.feelslike}&deg;c
            </p>
        </Typography>
      </CardContent>
    </Card> 
        </div>
    );
}