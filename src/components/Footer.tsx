export const Footer = () => {
  return (
    <footer className="bg-elegant-dark text-card py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src="/assets/logo.png" 
              alt="Isabela Nails Logo" 
              className="h-16 w-auto mx-auto opacity-80"
            />
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-dancing font-bold text-gold mb-2">
              Isabela Nails
            </h3>
            <p className="font-poppins text-card/80 max-w-md mx-auto">
              Transformando unhas em obras de arte com carinho e profissionalismo
            </p>
          </div>

          <div className="border-t border-card/20 pt-6">
            <p className="font-poppins text-card/60 text-sm">
              © 2025 Isabela Nails – Todos os direitos reservados
            </p>
            <p className="font-poppins text-card/40 text-xs mt-1">
              Feito com 💕 para realçar sua beleza
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};