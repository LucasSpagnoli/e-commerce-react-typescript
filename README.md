# React E-Commerce Showcase (Frontend)

Este é o front-end de um site de e-commerce moderno, construído com React, TypeScript e Tailwind CSS. O projeto demonstra o uso de hooks modernos, gerenciamento de estado centralizado com a Context API e um design totalmente responsivo e interativo.

O aplicativo busca produtos de uma API (Fake Store API) e permite que os usuários visualizem, pesquisem e filtrem os produtos em tempo real.

(imagem do site ainda não pronto, vai ficar mais bonito)
<img width="1897" height="894" alt="image" src="https://github.com/user-attachments/assets/d48dbb52-76bb-4a2b-af9a-b1f6d5dcb619" />

## ✨ Principais Funcionalidades

* **Busca de Produtos:** A barra de pesquisa no cabeçalho (desktop e mobile) filtra os produtos por nome em tempo real.
* **Filtro por Categoria:** Um menu dropdown customizado com animação de fade-in/out permite filtrar produtos por categoria.
* **Carrossel de Produtos:** A página inicial apresenta um carrossel "slice-based" para navegar pelos produtos em destaque.
* **Gerenciamento de Estado Centralizado:** Todo o estado da aplicação (lista de produtos, filtros, busca, índice do carrossel) é gerenciado pelo `ProductContext` do React.
* **Componentização:** A interface é dividida em componentes reutilizáveis como `ProductCard` e `Header`.
* **Design Responsivo:** Totalmente funcional em dispositivos móveis e desktop, incluindo menus e barras de pesquisa adaptáveis.

## 🚀 Tecnologias Utilizadas

* **React:** Biblioteca principal para a construção da interface do usuário.
* **TypeScript:** Para tipagem estática e um desenvolvimento mais robusto.
* **Tailwind CSS:** Para estilização rápida e utilitária (utility-first).
* **React Context API:** Para gerenciamento de estado global da aplicação.
* **React Hooks:** Utilização de `useState`, `useEffect`, `useContext` e `useRef` para toda a lógica de estado e ciclo de vida.
* **Vite:** Como ambiente de desenvolvimento e bundler.
* **Fake Store API:** Como fonte de dados (backend) para os produtos.

## 🏛️ Arquitetura do Projeto

A arquitetura deste projeto é centralizada em torno do `ProductContext`, que atua como a "única fonte da verdade" (Single Source of Truth) para os dados dos produtos.

1.  **`ProductContext.tsx` (O Cérebro):**
    * Contém todos os estados principais: `products` (lista completa), `screenProducts` (lista filtrada), `searchBar` (termo da busca) e `currentIndex` (índice do carrossel).
    * Executa a busca inicial de dados da API com `useEffect`.
    * Expõe as funções de manipulação de estado: `handleFilter()`, `handleSearch()`, `setCurrentIndex()`, etc.

2.  **`Header.tsx` (O Consumidor de Ações):**
    * Consome o contexto (`useContext`) para obter as funções de filtro/busca (`handleFilter`, `handleSearch`, `setSearchBar`).
    * Gerencia o estado local do seu próprio menu dropdown (o `isOpen` com `useRef` para "clicar fora").

3.  **`Home.tsx` (O Consumidor de Dados):**
    * Consome o contexto para obter a lista de produtos já fatiada (`shownProducts`).
    * Renderiza os cards usando `.map()`.
    * Contém a lógica de navegação do carrossel (`handleNext`, `handlePrev`) que chama `setCurrentIndex` do contexto.

4.  **`ProductCard.tsx` (Componente de Exibição):**
    * Um componente "burro" que apenas recebe um `product` como prop e o exibe.

## 🏁 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto em sua máquina.

**Pré-requisitos:**
* Node.js (v18 ou superior)
* npm ou yarn

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    cd nome-do-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Abra no navegador:**
    Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) para ver o projeto em ação.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
