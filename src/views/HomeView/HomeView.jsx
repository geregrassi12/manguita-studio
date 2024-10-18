import Hero from "../../components/Hero/Hero";
import GameListContainer from "../../components/GameListContainer/GameListContainer";
import Newsletter from "../../components/Newsletter/Newsletter";

export default function HomeView(){
    return(
        <div>
            <Hero/>
            <GameListContainer/>
            <Newsletter/>
        </div>
    )
} 