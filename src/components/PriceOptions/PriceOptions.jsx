import PriceOption from "../PriceOption/PriceOption";





const PriceOptions = () => {
const  options= [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Limited range of workout equipment",
            "Standard gym hours"
          ],
          "price": 20.00
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to gym facilities",
            "Full range of workout equipment",
            "Extended gym hours",
            "Group fitness classes",
            "Access to locker room"
          ],
          "price": 50.00
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "features": [
            "Access to gym facilities",
            "Full range of workout equipment",
            "24/7 gym access",
            "Group and personal training sessions",
            "Access to VIP locker room",
            "Complimentary refreshments"
          ],
          "price": 100.00
        }
      ]

    
    return (
        <div className="m-12 ">
            <h2 className="text-5px"> Bast price in the town</h2>
       <div className="grid md:grid-cols-3 gap-3">     {
           options.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>

        </div>

    


    );
};

export default PriceOptions;