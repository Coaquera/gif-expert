import { HeroList } from "../components/HeroList"

export const DcPage = () => {

// const heroDc = HeroList('DC Comics');
// console.log(heroDc);


  return (
    <>
      {
        <HeroList publisher={'DC Comics'}/>
      }
    </>
  )
}
