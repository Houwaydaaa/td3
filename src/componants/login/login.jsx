import {useState} from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erreurs, setErreurs] = useState({});
    function handleSubmit(e)
     {
        e.preventDefault();
        let newErreurs={};
        if (email.trim() === "") 
            newErreurs.email = "Veuillez introduire un email !";
         else if (! / \S+@\S+\.\S+/.test(email)) 
            newErreurs.email = "Veuillez introduire un email valide !";
        if (password.trim() === "") 
            newErreurs.password = "Veuillez introduire un mot de passe !";
        else if (password.length<8)
            newErreurs.password = "Le mot de passe doit contenir au moins 8 caractères !";
        else if (! /[A-Z]/.test(password))  
            newErreurs.password = "Le mot de passe doit contenir au moins une lettre majuscule !";
        else if (! /[0-9]/.test(password))
            newErreurs.password = "Le mot de passe doit contenir au moins un chiffre !";
        else if (! /[^a-zA-Z0-9]/.test(password))
            newErreurs.password = "Le mot de passe doit contenir au moins un caractere speciale !";
        if (Object.keys(newErreurs).length===0) {
            alert("enregistrement avec succées!");
            console.log("Email:" + email+" password:" + password);
        }
        else {
            setErreurs(newErreurs);
            console.log(newErreurs);
        }
    }
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Mail</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {erreurs.email && 
        (<span>{erreurs.email}</span>)}
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {erreurs.password && 
        (<span>{erreurs.password}</span>)}
      </div>

      <button type="submit">enregistrer</button>
    </form>
  );
}

export default Login;


