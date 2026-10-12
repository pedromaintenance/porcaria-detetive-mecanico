# P.O.R.C.A.R.I.A. — DETETIVE MECÂNICO
## Primeiro jogo da série | PWA offline v1.0.0

**Um simulador didático de investigação de falhas de equipamentos móveis de mineração.**

### Conteúdo do jogo
- 7 dossiês completos: 777 comando final com contaminação; 6030 redutor de giro; 777 mudança de FDAO; 336 água no comando final; 395 sistema hidráulico; 777 motor diesel/óleo; DR410i compressor.
- Triagem operacional (segurança e risco), ações de inspeção com evidências, formação de hipótese, proposta de intervenção e relatório de aprendizado.
- Quatro dimensões de pontuação: Segurança, Diagnóstico, Intervenção e Eficiência.
- Artigos técnicos consultáveis integralmente offline.
- Autosave no navegador, exportação/importação de backup em JSON, relatório didático em TXT e cópia de texto.
- Visual otimizado para telefone na vertical; mantém formato vertical no computador.
- Sem CDN, login, bibliotecas remotas ou backend.

### Como publicar grátis no GitHub Pages
1. Crie um repositório GitHub (exemplo: `porcaria-detetive-mecanico`).
2. Envie **todo o conteúdo deste ZIP**, preservando pastas, para a **raiz do repositório**: `index.html`, `manifest.webmanifest`, `service-worker.js`, `css/`, `js/`, `icons/`.
3. No GitHub, entre em **Settings → Pages**. Selecione **Deploy from a branch → main → /(root)**, depois **Save**.
4. Acesse a URL HTTPS do GitHub Pages. Abra uma vez com internet e aguarde o primeiro carregamento.
5. No Android Chrome, menu `⋮` → `Instalar app` ou `Adicionar à tela inicial`. No iPhone Safari: Compartilhar → Adicionar à Tela de Início.
6. Após a primeira visita/instalação bem-sucedida, o app carrega offline. Confirme desligando a conexão e reabrindo.

Atenção: **um arquivo aberto via `file://` não oferece instalação PWA nem service worker**. Os arquivos HTML/CSS/JS podem abrir localmente, mas o PWA exige HTTPS ou `localhost`.

### Teste local em computador
É possível usar um servidor estático simples: `python -m http.server 8000` dentro da pasta, depois abrir `http://localhost:8000/` no navegador. Python é opcional, apenas para testar localmente. Para usuários finais, não é necessário instalar nada além do navegador.

### Arquivos principais
- `index.html`: entrada do jogo e carregamento de recursos.
- `css/style.css`: layout mobile-first, cores, componentes e estilo das missões.
- `js/cases.js`: banco de missões e artigos. Novos episódios podem ser adicionados aqui.
- `js/app.js`: regras de jogo, estado, renderização, pontuação, diário de evidências, relatórios e backup.
- `manifest.webmanifest`: metadados para instalação PWA.
- `service-worker.js`: cache offline (precisa de HTTPS ou localhost).
- `icons/`: ícones de instalação.

### Importante: segurança e uso de fontes
Os modelos, sistemas, rotinas e conceitos refletem classes de equipamentos e processos de manutenção presentes nos materiais de estudo deste projeto, incluindo a Estratégia de Manutenção de Mina, o Procedimento de Criação de Notificações por Análise de Óleo, o Fluxo de Notificações e o treinamento SIS/CAT ET.

**Os cenários, valores, laudos, falhas, achados, testes e conclusões específicas são fictícios e didáticos.** Não foram incluídos relatórios reais, números de série, dados de produção, custos internos, credenciais, prescrições de torque, limites de pressão ou valores OEM não confirmados. O jogo não acessa SAP nem máquinas. A pontuação não autoriza manutenção, teste ou liberação de equipamento.

Se for publicado em repositório público, não adicione conteúdos confidenciais sem autorização. Os textos explicativos de fontes internas foram sintetizados para fins de treinamento, não representam anexação dos documentos integrais.

### Atualização e cache
Quando alterar o jogo, mude a versão do cache na constante `CACHE` do `service-worker.js` e o número `APP_VERSION` do `js/app.js`. Atualizar os recursos via internet substitui a versão anterior no cache; as pontuações permanecem no armazenamento local do navegador.

### Privacidade e progresso
O armazenamento usa `localStorage` no dispositivo; apagar dados do navegador pode apagar o progresso. Use **Configurações → Exportar JSON** como backup; a importação restaura histórico e investigação em andamento. Nada é transmitido a um servidor.
