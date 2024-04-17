import { FunctionComponent } from 'react';

// Définition des types pour les fonctions de test
type TestFunction = () => void;

// Définition des types pour la fonction de connexion
type LoginFetchFunction = (username: string, password: string) => void;

// Interface pour les props du composant DevelopmentTool
interface DevelopmentToolProps {
  testFunctions: TestFunction[];
  loginFetch: LoginFetchFunction;
}

// Déclaration du composant DevelopmentTool avec les types
declare const DevelopmentTool: FunctionComponent<DevelopmentToolProps>;

export default DevelopmentTool;