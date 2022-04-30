import React, {useEffect, useState } from "react";

function RenovationList() {
  const [renovations, setRenovations] = useState([]);

  useEffect(() => {
    fetch("/renovations")
      .then((r) => r.json())
      .then(setRenovations);
  }, []);

  console.log(renovations)

  return (
    <div>
      List of Renovations
    </div>
  )
}

export default RenovationList





//   return (
//     <Wrapper>
//       {recipes.length > 0 ? (
//         recipes.map((recipe) => (
//           <Recipe key={recipe.id}>
//             <Box>
//               <h2>{recipe.title}</h2>
//               <p>
//                 <em>Time to Complete: {recipe.minutesToComplete} minutes</em>
//                 &nbsp;·&nbsp;
//                 <cite>By {recipe.user.username}</cite>
//               </p>
//               <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
//             </Box>
//           </Recipe>
//         ))
//       ) : (
//         <>
//           <h2>No Recipes Found</h2>
//           <Button as={Link} to="/new">
//             Make a New Recipe
//           </Button>
//         </>
//       )}
//     </Wrapper>
//   );
// }

