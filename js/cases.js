/* P.O.R.C.A.R.I.A. - Detetive Mecânico | Casos didáticos ficcionais, baseados em processos da Manutenção de Mina. */
window.PORCARIA_CASES = [
  {
    id:'777-particulado', number:'01', title:'Poeira no aço', subtitle:'O comando final que pediu investigação',
    asset:'777 · Caminhão fora de estrada', model:'777', illustration:'truck', system:'Comando final direito',
    level:'Intermediário', category:'Tribologia', risk:'Alto', target:32, estimated:'8–12 min',
    teaser:'Silício e ferro em tendência de alta. O laboratório pede uma investigação, mas ninguém sabe de onde vem a poeira.',
    brief:'O laudo de óleo do comando final direito mostra aumento de silício e ferro em relação às amostras anteriores. Não há confirmação de fratura ou falha funcional. A operação solicita uma decisão sobre a continuidade da máquina.',
    objectives:['Distinguir contaminação, desgaste e causa raiz','Investigar caminhos prováveis de ingresso de particulado','Definir ação proporcional às evidências'],
    initial:['Laudo: silício alto e ferro em elevação (valores simulados)','Equipamento ainda operante','Nenhuma inspeção física foi feita após o laudo'],
    triage:[
      {text:'Liberar sem verificação, já que a máquina não parou.', grade:0, feedback:'Ausência de falha funcional não elimina risco de evolução. O laudo precisa de tratativa.'},
      {text:'Suspender a liberação irrestrita, avaliar o risco e organizar inspeção segura.',grade:2,feedback:'Conduta conservadora e proporcional: a condição operacional depende de avaliação, sem afirmar pane inexistente.'},
      {text:'Determinar substituição imediata do comando final sem inspecionar.',grade:1,feedback:'A decisão evita exposição, mas condena prematuramente um componente sem diagnóstico.'}
    ],
    inspections:[
      {id:'trend',title:'Ler a tendência SOS',type:'Documento',cost:4,tag:'tendencia',result:'As duas amostras anteriores tinham silício estável; nesta houve aumento simultâneo de silício e ferro. Nenhum metal sozinho identifica a peça defeituosa.',insight:'A evolução no tempo fortalece a hipótese de evento recente; não confirma o ponto de entrada.'},
      {id:'respiro',title:'Inspecionar respiro e entorno',type:'Inspeção',cost:6,tag:'respiro',result:'Respiro com acúmulo de material particulado e condição de vedação externa duvidosa. Não foi feito ensaio de estanqueidade.',insight:'Respiro e vedação passam a ser caminhos suspeitos, ainda não causas raízes confirmadas.'},
      {id:'vedacao',title:'Inspecionar retentor e tampas',type:'Inspeção',cost:6,tag:'vedacao',result:'Há vestígios de poeira na região da tampa de inspeção. Não há evidência conclusiva de passagem pelo retentor.',insight:'Um achado visível direciona verificação mais específica, sem autorizar condenação do retentor.'},
      {id:'historico',title:'Consultar ordens e intervenções',type:'Histórico',cost:4,tag:'historico',result:'Houve uma intervenção no compartimento semanas antes. O histórico não contém registro completo das condições de vedação ao fechar.',insight:'Documentação incompleta reduz a confiança na reconstrução do evento.'},
      {id:'ima',title:'Avaliar bujão magnético',type:'Inspeção',cost:6,tag:'particulas',result:'Encontrada película de partículas ferrosas finas; não foram observados fragmentos grosseiros nesta inspeção simulada.',insight:'Há indicação de desgaste; a quantidade e morfologia precisam ser comparadas aos critérios aplicáveis.'},
      {id:'amostra',title:'Conferir coleta e identificação',type:'Coleta',cost:5,tag:'amostra',result:'A identificação da coleta corresponde ao compartimento; o procedimento de amostragem deve continuar sendo observado em recoletas.',insight:'A coerência da coleta reduz, mas não zera, o risco de resultado não representativo.'},
      {id:'ruido',title:'Consultar relato do operador',type:'Histórico',cost:3,tag:'operacao',result:'Não foi reportado ruído anormal de forma consistente. Isso não comprova que o conjunto esteja íntegro.',insight:'Sintoma negativo é evidência auxiliar, não certificado de ausência de dano.'},
      {id:'abrir',title:'Desmontar todo o comando imediatamente',type:'Invasiva',cost:24,tag:'invasiva',unsafe:true,result:'A desmontagem seria uma intervenção de grande porte, sem critérios de decisão, plano ou constatação suficiente nesta fase.',insight:'Desmontagem prematura aumenta tempo e risco de intervenção sem melhorar proporcionalmente o diagnóstico.'}
    ],
    core:['tendencia','respiro','particulas'],
    hypotheses:[
      {text:'Contaminação por particulado, com possível ingresso por respiro/vedação e desgaste associado; origem ainda a confirmar.',grade:2,requires:['tendencia','respiro'],feedback:'Separa corretamente indício, mecanismo provável e origem ainda não confirmada.'},
      {text:'Engrenagens quebradas são a causa raiz comprovada porque o ferro aumentou.',grade:0,feedback:'Ferro elevado não prova fratura de engrenagem. Faltam evidências diretas.'},
      {text:'O laudo é necessariamente falso porque a máquina ainda funciona.',grade:0,feedback:'Máquinas podem operar com degradação em desenvolvimento.'},
      {text:'Há contaminação possível, mas não é preciso procurar o caminho de ingresso.',grade:1,feedback:'Reconhece o achado, mas não estrutura uma investigação causal.'}
    ],
    solutions:[
      {text:'Tratar possíveis caminhos de ingresso conforme inspeção, registrar SOS/OS e programar recoleta e reavaliação de desgaste.',grade:2,requires:['respiro','tendencia'],feedback:'Integra contenção do mecanismo, rastreabilidade e verificação posterior; necessidade de troca depende do laudo e avaliação técnica.'},
      {text:'Trocar o óleo e encerrar automaticamente a ocorrência.',grade:0,feedback:'Sem tratar a entrada de particulado ou acompanhar a tendência, o problema pode retornar.'},
      {text:'Substituir o comando final por precaução, independentemente de testes.',grade:1,feedback:'Pode resultar em custo e indisponibilidade desnecessários.'},
      {text:'Liberar sem nota e ignorar as próximas amostras.',grade:0,feedback:'Perde a rastreabilidade e deixa o risco sem controle.'}
    ],
    verdict:'O conjunto de indícios aponta para contaminação por particulado e possível desgaste associado. A origem do ingresso ainda exige confirmação no campo. A resposta deve conter o risco, inspecionar as interfaces e acompanhar a tendência.',
    pitfalls:['Silício não identifica sozinho uma vedação defeituosa.','Ferro elevado não prova automaticamente engrenagem quebrada.','Em comando final fechado não se deve inventar filtro de óleo dedicado.'],
    next:['Registrar relatório SOS, tendência e evidências','Verificar vedação, respiro, tampa e presença de partículas','Definir necessidade de troca pela recomendação técnica e evolução','Coletar amostra antes de eventual intervenção e acompanhar resultado'],
    note:'SOS-COMANDO FINAL DIREITO',source:'Procedimento interno de Notificações por Análise de Óleo · seções 3, 8, 13 e 19'
  },
  {
    id:'6030-redutor',number:'02',title:'Ferro no giro',subtitle:'O redutor de giro da 6030',asset:'6030 · Escavadeira hidráulica',model:'6030',illustration:'excavator',system:'Redutor de giro traseiro',level:'Avançado',category:'Tribologia',risk:'Crítico',target:35,estimated:'10–14 min',
    teaser:'Silício, alumínio, ferro, cobre e traços de limalha. O que é indicação e o que está confirmado?',
    brief:'Um relatório sinaliza contaminação por poeira, metais de desgaste e traços de limalha ferrosa no redutor de giro traseiro. O laboratório solicita inspeção imediata e recoleta antecipada. A escavadeira é crítica para a Produção.',
    objectives:['Reconhecer risco elevado de dano secundário','Separar mecanismo de falha e origem do dano','Produzir uma tratativa executável sem inventar materiais'],
    initial:['Silício e alumínio associados a poeira (simulados)','Ferro e cobre com traços de limalha','Recomendação: inspeção imediata e nova amostra antecipada'],
    triage:[
      {text:'Colocar o conjunto em condição segura, suspender operação até avaliação responsável e planejar inspeção urgente.',grade:2,feedback:'Correto: os indícios exigem avaliação imediata e controle do risco antes da liberação.'},
      {text:'Autorizar operação normal até a próxima preventiva.',grade:0,feedback:'Desconsidera a combinação de partículas, metais e recomendação de inspeção imediata.'},
      {text:'Mandar trocar óleo e liberar sem investigar partículas.',grade:0,feedback:'A troca isolada não controla eventual desgaste ativo.'}
    ],
    inspections:[
      {id:'laudo',title:'Conferir interpretação original',type:'Documento',cost:4,tag:'laudo',result:'O laboratório relaciona silício e alumínio a ingresso de poeira e ferro/cobre a desgaste de engrenagens, buchas ou arruelas de encosto. Trata-se de suspeita, não de desmontagem conclusiva.',insight:'Preserve a recomendação original. A análise química não identifica isoladamente a peça danificada.'},
      {id:'seguranca',title:'Planejar bloqueio e isolamento',type:'Segurança',cost:5,tag:'bloqueio',result:'Foi prevista intervenção com energia controlada, imobilização e acesso seguro de acordo com procedimento local.',insight:'Não se avalia limalha ou componente rotativo sem controles de energia.'},
      {id:'vedacoes',title:'Inspecionar vedações externas',type:'Inspeção',cost:6,tag:'vedacoes',result:'Vedação com marcas de abrasão e acúmulo de particulados. Há indício de ingresso, mas estanqueidade interna ainda não foi ensaiada.',insight:'Desgaste externo sustenta hipótese de via de ingresso, não causa raiz encerrada.'},
      {id:'limalha',title:'Examinar bujão magnético',type:'Inspeção',cost:7,tag:'limalha',result:'Há partículas ferrosas perceptíveis e partículas maiores que as do histórico anterior. Uma avaliação de morfologia e desmontagem pode ser necessária.',insight:'Partículas e metais em conjunto exigem maior cautela do que contaminação isolada.'},
      {id:'operador',title:'Levantar relatos de ruído',type:'Histórico',cost:3,tag:'ruido',result:'O operador mencionou ruído intermitente no giro nos últimos dias, ainda não caracterizado por ensaio controlado.',insight:'Relato operacional reforça a necessidade de avaliação, sem identificar qual peça falhou.'},
      {id:'historico',title:'Ver tendência e serviço anterior',type:'Histórico',cost:5,tag:'tendencia',result:'Aumento progressivo de ferro/cobre em amostras sucessivas. Último atendimento sem registro fotográfico das vedações.',insight:'Tendência crescente + partículas elevam a gravidade, apesar de dados incompletos.'},
      {id:'pecas',title:'Consultar catálogo por número de série',type:'Documento',cost:5,tag:'catalogo',result:'O catálogo indica peças aplicáveis por configuração, mas PN, volumes e procedimentos precisam ser validados no SIS/OEM e SAP antes da programação.',insight:'Não é aceitável preencher PN, torque ou quantidade sem confirmação.'},
      {id:'teste',title:'Acionar giro para “ouvir melhor” sem controle',type:'Invasiva',cost:18,tag:'teste-risco',unsafe:true,result:'A tentativa expõe pessoal/equipamento a um componente com indícios severos, sem procedimento de teste aprovado.',insight:'A coleta de uma evidência não justifica criar risco adicional.'}
    ],
    core:['laudo','limalha','vedacoes','tendencia'],
    hypotheses:[
      {text:'Ingresso provável de poeira associado a desgaste mecânico em evolução; componente preciso e causa raiz ainda requerem confirmação.',grade:2,requires:['laudo','limalha'],feedback:'Boa delimitação: indicadores de contaminação e desgaste, com incerteza explícita.'},
      {text:'Bucha traseira necessariamente partida, já que existe cobre no óleo.',grade:0,feedback:'Cobre pode ter diversas fontes; a peça danificada não está identificada com segurança.'},
      {text:'Apenas erro de laboratório, sem justificativa para avaliação.',grade:0,feedback:'Os múltiplos achados convergentes tornam perigoso descartar o laudo.'},
      {text:'Há poeira, mas limalhas e ruído podem ser ignorados.',grade:1,feedback:'Desconsidera sinais relevantes de desgaste ativo.'}
    ],
    solutions:[
      {text:'Manter controle operacional, inspecionar vedações e partículas, avaliar abertura dirigida com Engenharia/OEM, documentar e recoletar conforme laudo.',grade:2,requires:['limalha','bloqueio'],feedback:'Plano tecnicamente proporcional, com escalonamento para avaliação mais profunda quando necessário.'},
      {text:'Lavar o equipamento, trocar um filtro hidráulico genérico e liberar.',grade:0,feedback:'O redutor de giro é um compartimento fechado; filtro de outro circuito não pode ser presumido.'},
      {text:'Condenar o redutor sem medições e requisitar todos os componentes.',grade:1,feedback:'A prudência não substitui delimitação técnica, embora a situação exija cautela.'},
      {text:'Ignorar o laudo e manter produção até falha funcional.',grade:0,feedback:'Aumenta a chance de dano secundário e perda não programada.'}
    ],
    verdict:'Caso de risco elevado: poeira e desgaste podem coexistir. A evidência não autoriza eleger engrenagem, bucha ou arruela específica como causa raiz. É necessário inspecionar com o equipamento seguro e registrar retorno técnico detalhado.',
    pitfalls:['No catálogo interno, Swing Drive / Comando de Oscilação deve ser tratado como Redutor de Giro.','Trocar o óleo pode ser insuficiente diante de desgaste ativo.','Compartimento fechado normalmente não tem filtro hidráulico dedicado.'],
    next:['Tratar como intervenção urgente de acordo com risco e laudo','Inspecionar vedações, partículas, ruído relatado e folgas dentro de procedimento seguro','Validar componentes e intervenções OEM antes de desmontar','Inserir 1Z0101 / Kit Coleta / 1 quando houver recoleta','Não encerrar até ter retorno e tendência'],note:'SOS-REDUTOR DE GIRO TRASEIRO',source:'Procedimento interno de Notificações por Análise de Óleo · seções 7, 8, 13, 14 e 18'
  },
  {
    id:'777-fdao',number:'03',title:'O falso alarme',subtitle:'Uma mudança de formulação',asset:'777 · Caminhão fora de estrada',model:'777',illustration:'truck',system:'Comando final esquerdo',level:'Intermediário',category:'Lubrificantes',risk:'Controlado',target:28,estimated:'7–10 min',
    teaser:'O laboratório marca infravermelho incompatível. Porém, o óleo mudou. É falha ou informação desatualizada?',
    brief:'Uma amostra do comando final esquerdo apresenta perfil de aditivos e infravermelho diferentes da referência histórica, sem tendência anormal de metais e sem sintomas operacionais. Houve mudanças recentes no óleo utilizado na frota.',
    objectives:['Evitar intervenções desnecessárias por diferença de formulação','Conferir óleo aplicado e rastreabilidade','Aprender a construir nova linha de base'],
    initial:['Perfil químico divergente da referência antiga','Metais sem elevação anormal (simulados)','Sem anomalia sensitiva reportada'],
    triage:[
      {text:'Verificar histórico de lubrificante e laudo antes de decidir necessidade de parada.',grade:2,feedback:'Boa triagem: uma divergência química isolada requer contexto e confirmação.'},
      {text:'Condenar imediatamente o comando final por “óleo incompatível”.',grade:0,feedback:'A informação ainda não distingue mistura prejudicial de mudança conhecida de formulação.'},
      {text:'Descartar o laudo sem conferir o óleo aplicado.',grade:1,feedback:'Pode existir erro de identificação ou fluido incorreto. A verificação continua necessária.'}
    ],
    inspections:[
      {id:'laudo',title:'Revisar resultado e tendência',type:'Documento',cost:4,tag:'laudo',result:'A divergência concentra-se no pacote de aditivos e espectro infravermelho. Não há elevação anormal consistente de metais, água ou poeira nesta situação simulada.',insight:'Ausência de sinais adicionais reduz a suspeita de desgaste, mas não substitui verificação do fluido.'},
      {id:'troca',title:'Consultar OS de lubrificação',type:'Histórico',cost:5,tag:'mudanca',result:'A ordem registra substituição de produto Shell por Caterpillar FDAO neste compartimento. Lote, aplicação e registro de data estão documentados.',insight:'O histórico explica por que o perfil químico pode ter mudado.'},
      {id:'etiqueta',title:'Conferir especificação e aplicação',type:'Inspeção',cost:6,tag:'fluido',result:'O produto registrado coincide com a mudança formal. A adequação ao compartimento deve ser conferida no procedimento OEM aplicável.',insight:'Uma troca documentada é evidência importante, mas a compatibilidade técnica ainda depende de especificação.'},
      {id:'amostragem',title:'Auditar cadeia da amostra',type:'Coleta',cost:4,tag:'amostra',result:'Identificação do compartimento e horímetro coerentes com o histórico. Não aparecem sinais de troca de frasco.',insight:'Reduz suspeita de erro de coleta.'},
      {id:'campo',title:'Revisar sintomas de campo',type:'Histórico',cost:3,tag:'campo',result:'Sem relatos recentes de ruído, sobretemperatura ou vazamento no comando final.',insight:'Ajuda a contextualizar, mas sintomas ausentes não garantem integridade absoluta.'},
      {id:'manual',title:'Consultar referência do lubrificante',type:'Documento',cost:5,tag:'manual',result:'A referência técnica vigente deve ser verificada por modelo e configuração. Não se deve inferir adequação apenas pelo fabricante ou viscosidade.',insight:'Especificação aprovada é mais importante do que nome comercial.'},
      {id:'trocar',title:'Drenar óleo e desmontar sem confirmar',type:'Invasiva',cost:20,tag:'invasiva',unsafe:true,result:'Uma intervenção extensa antes de confrontar laudo e histórico não esclarece a diferença de formulação.',insight:'Evite sacrificar recursos e disponibilidade em uma hipótese não testada.'}
    ],
    core:['laudo','mudanca','fluido'],
    hypotheses:[
      {text:'O perfil diferente é compatível com a mudança conhecida de lubrificante; validar a especificação e estabelecer novo baseline.',grade:2,requires:['mudanca','fluido'],feedback:'Integra evidência química e histórico de manutenção.'},
      {text:'Desgaste interno severo confirmado pelo infravermelho diferente.',grade:0,feedback:'Infravermelho e aditivos diferentes não provam falha mecânica.'},
      {text:'Troca de amostra é comprovada, dispensando investigação.',grade:0,feedback:'Não há prova de troca de amostra.'},
      {text:'Pode ser mudança de óleo, mas é necessário trocar imediatamente sem conferir nada.',grade:1,feedback:'Admite uma hipótese válida, mas prescreve ação sem evidência suficiente.'}
    ],
    solutions:[
      {text:'Documentar a mudança verificada, confirmar aprovação OEM e atualizar a referência de tendência; monitorar sem abrir nota apenas pelo perfil diferente.',grade:2,requires:['mudanca','laudo'],feedback:'Conduta alinhada à prevenção de notas espúrias, mantendo controle técnico.'},
      {text:'Criar uma nota emergencial de substituição do comando final.',grade:0,feedback:'Trata uma diferença de baseline como falha mecânica confirmada.'},
      {text:'Ignorar todas as próximas análises desse componente.',grade:0,feedback:'A nova formulação exige continuidade do acompanhamento, não abandono.'},
      {text:'Realizar uma nova amostra identificada e manter pendência de verificação sem confirmar óleo aplicado.',grade:1,feedback:'É cauteloso, mas deixa uma evidência central ainda não tratada.'}
    ],
    verdict:'A mudança formal e verificada de lubrificante pode explicar a divergência de aditivos/infravermelho. Sem outros sinais anormais, ela não implica automaticamente falha mecânica. É necessário atualizar a referência e continuar monitorando.',
    pitfalls:['Um perfil químico novo não é, por si só, “óleo errado”.','Nunca concluir compatibilidade sem conferir o OEM.','Novo baseline não significa encerrar o monitoramento.'],
    next:['Verificar registro da troca Shell → Caterpillar FDAO','Validar especificação por equipamento/compartimento','Documentar revisão da referência no histórico','Continuar tendência de análise sem abrir nota indevida'],note:'AVALIAÇÃO DE BASELINE — COMANDO FINAL ESQUERDO',source:'Procedimento interno de Notificações por Análise de Óleo · seções 3 e 8; exemplo de mudança conhecida da operação'
  },
  {
    id:'336-agua',number:'04',title:'Água na engrenagem',subtitle:'O comando final da 336',asset:'336 · Escavadeira hidráulica',model:'336',illustration:'excavator',system:'Comando final esquerdo',level:'Intermediário',category:'Tribologia',risk:'Crítico',target:32,estimated:'9–12 min',
    teaser:'Água excessiva impede parte da análise. A origem pode estar fora do compartimento.',
    brief:'Laudo com teor elevado de água e emulsão no comando final esquerdo. Parte das interpretações de desgaste foi prejudicada. A máquina passou por lavagens recentes e não há inspeção de tampas registrada.',
    objectives:['Reconhecer efeito da água no filme lubrificante','Verificar caminhos de entrada antes de só trocar óleo','Planejar intervenção e recoleta com rastreabilidade'],
    initial:['Amostra com água e emulsão (simulada)','Interpretação de desgaste parcialmente comprometida','Lavagem do equipamento realizada recentemente'],
    triage:[
      {text:'Impedir operação até avaliação técnica do risco e organizar inspeção segura de contaminação.',grade:2,feedback:'Água excessiva em compartimento crítico exige cautela e ação técnica rápida.'},
      {text:'Liberar normalmente, pois não houve limalha identificada.',grade:0,feedback:'Análise prejudicada não significa ausência de desgaste.'},
      {text:'Trocar óleo sem inspecionar a origem da água e encerrar.',grade:1,feedback:'A reposição do lubrificante não resolve infiltração persistente.'}
    ],
    inspections:[
      {id:'agua',title:'Ler detalhamento do laudo',type:'Documento',cost:4,tag:'agua',result:'A presença de água reduz a confiabilidade de alguns indicadores e pode favorecer corrosão e degradação do óleo.',insight:'Não use a ausência de indicação metálica como prova quando a própria análise está comprometida.'},
      {id:'tampa',title:'Inspecionar tampas e bocais',type:'Inspeção',cost:6,tag:'tampa',result:'Encontrada tampa com vedação deformada e sujidade no assentamento. Falta confirmar estanqueidade.',insight:'Uma interface de entrada plausível foi encontrada e requer correção/validação.'},
      {id:'lavagem',title:'Investigar método de lavagem',type:'Histórico',cost:4,tag:'lavagem',result:'Registro indica aplicação frequente de água sob pressão nas proximidades das tampas. O método será revisado.',insight:'O procedimento de lavagem pode contribuir para ingresso de água quando vedações não estão íntegras.'},
      {id:'respiro',title:'Inspecionar respiro e vedações',type:'Inspeção',cost:6,tag:'vedacao',result:'Respiro com sinais de umidade externa. A condição de assentamento ainda requer verificação.',insight:'Há várias vias possíveis. Uma tampa degradada não exclui outras.'},
      {id:'dreno',title:'Verificar aspecto do óleo drenado',type:'Inspeção',cost:6,tag:'dreno',result:'Aspecto leitoso homogêneo, compatível com emulsificação. A manipulação foi simulada sob bloqueio e contenção adequada.',insight:'A evidência material converge com o laboratório.'},
      {id:'hist',title:'Consultar laudos anteriores',type:'Histórico',cost:4,tag:'tendencia',result:'Último laudo não indicava água expressiva. O ingresso parece recente, embora não se conheça a data exata.',insight:'Mudança de condição merece investigação do evento e do procedimento.'},
      {id:'filtro',title:'Trocar filtro hidráulico de outro circuito',type:'Invasiva',cost:16,tag:'filtro',unsafe:true,result:'Filtro hidráulico externo não trata óleo de comando final fechado sem circuito compartilhado comprovado.',insight:'Não presuma filtros pela existência de sistema hidráulico na máquina.'}
    ],
    core:['agua','tampa','lavagem','dreno'],
    hypotheses:[
      {text:'Contaminação por água com ingresso provável por interfaces de vedação e possível contribuição da lavagem; origem ainda a confirmar.',grade:2,requires:['agua','tampa'],feedback:'Combina achados químicos, físicos e contexto de operação.'},
      {text:'Desgaste zero, já que os metais não foram conclusivos.',grade:0,feedback:'Uma análise incompleta não pode excluir desgaste.'},
      {text:'Falha de bomba hidráulica comprovada pela presença de água no comando final.',grade:0,feedback:'Não existe relação direta suficiente para essa conclusão.'},
      {text:'A água apareceu, mas a origem não precisa ser investigada.',grade:1,feedback:'Reconhece contaminante, mas deixa o mecanismo recorrente sem controle.'}
    ],
    solutions:[
      {text:'Tratar entrada de água e método de lavagem, executar troca se indicada no laudo e validada, coletar antes da intervenção e recoletar para verificar resultado.',grade:2,requires:['agua','tampa'],feedback:'Combina contenção, correção do possível ingresso e acompanhamento.'},
      {text:'Adicionar óleo novo ao compartimento e liberar sem drenar.',grade:0,feedback:'Diluir contaminação não restaura adequadamente a condição lubrificante.'},
      {text:'Desmontar imediatamente toda a transmissão hidráulica.',grade:0,feedback:'Escopo desconectado da evidência.'},
      {text:'Trocar óleo e registrar, sem inspecionar tampa, vedação nem lavagem.',grade:1,feedback:'Pode ser uma ação parcial, mas a fonte do contaminante continua.'}
    ],
    verdict:'Água no lubrificante pode comprometer a lubrificação e a própria análise de desgaste. A inspeção indica vias plausíveis de ingresso associadas a tampa/vedação e lavagem. É preciso corrigir o mecanismo, atender o laudo e confirmar a tendência.',
    pitfalls:['Amostra prejudicada não prova ausência de metais ou desgaste.','Água pode entrar por tampas, vedações e procedimentos de lavagem.','Conferir especificação e volume de óleo no OEM; não inventar valores.'],
    next:['Segregar o equipamento conforme risco e procedimento','Corrigir as vias de ingresso confirmadas','Coletar antes da intervenção e trocar óleo se recomendado','Nova amostra com identificação e histórico completos'],note:'SOS-COMANDO FINAL ESQUERDO',source:'Procedimento interno de Notificações por Análise de Óleo · seções 8.2, 13 e 18'
  },
  {
    id:'395-lentidao',number:'05',title:'Força que desaparece',subtitle:'Uma função hidráulica lenta',asset:'395 · Escavadeira hidráulica',model:'395',illustration:'excavator',system:'Cilindro hidráulico do braço',level:'Avançado',category:'Hidráulica',risk:'Alto',target:35,estimated:'10–14 min',
    teaser:'Um movimento perde desempenho com óleo quente. Trocar a bomba seria rápido — e possivelmente errado.',
    brief:'O operador relata lentidão do movimento do braço após aquecimento do sistema. Outras funções respondem normalmente. Não há ruptura de mangueira visível. O diagnóstico precisa ser feito com testes autorizados e gestão de energia hidráulica.',
    objectives:['Usar teste comparativo para delimitar circuito','Não condenar a bomba principal com um único sintoma','Planejar diagnóstico seguro com documentação OEM'],
    initial:['Sintoma aparece principalmente a quente (simulado)','Outras funções hidráulicas normais','Nenhuma medição comparativa registrada'],
    triage:[
      {text:'Restringir o uso da função e preparar diagnóstico controlado com isolamento e procedimento OEM.',grade:2,feedback:'Boa postura: contenção de risco e testes apropriados antes de trocar componentes.'},
      {text:'Solicitar ciclos repetidos em carga máxima com pessoas próximas ao implemento.',grade:0,feedback:'Exposição a energia e cargas suspensas, sem isolamento nem procedimento aprovado.'},
      {text:'Condenar a bomba principal com base na lentidão do braço.',grade:1,feedback:'Não há evidência suficiente para atribuir uma falha comum a somente uma função.'}
    ],
    inspections:[
      {id:'mapa',title:'Ler esquema hidráulico aplicável',type:'Documento',cost:5,tag:'esquema',result:'A função envolve comando, linhas, válvula e cilindro. O esquema real precisa ser conferido por série e configuração.',insight:'Um circuito fornece hipóteses concorrentes; não se diagnostica somente pela peça mais cara.'},
      {id:'comp',title:'Comparar outras funções',type:'Teste',cost:5,tag:'comparacao',result:'Em teste virtual autorizado, outras funções apresentam comportamento normal. A anomalia fica concentrada na função do braço.',insight:'A comparação enfraquece a hipótese de falha global de alimentação, sem eliminá-la por completo.'},
      {id:'temperatura',title:'Comparar frio/quente',type:'Teste',cost:5,tag:'temperatura',result:'O sintoma se intensifica com o fluido aquecido. Não foi atribuído limite OEM a este achado simulado.',insight:'Mudanças por temperatura podem estar associadas a vazamento interno, válvulas ou suprimento.'},
      {id:'retorno',title:'Solicitar teste de vazamento interno',type:'Teste',cost:8,tag:'vazamento',result:'Simulação de ensaio executado por profissional habilitado conforme procedimento: há retorno interno excessivo associado ao cilindro do braço, comparado à referência do teste.',insight:'Evidência mais específica aponta para perda interna no atuador. O componente ainda precisa de avaliação de condição.'},
      {id:'valvula',title:'Verificar comando e resposta',type:'Teste',cost:6,tag:'comando',result:'Sinais de comando coerentes, sem anomalia evidente na atuação elétrica nesta simulação.',insight:'Ajuda a reduzir hipóteses ligadas ao comando, mas não substitui aferições hidráulicas.'},
      {id:'exterior',title:'Inspecionar vazamentos externos',type:'Inspeção',cost:4,tag:'externo',result:'Não há vazamento externo relevante observado. Vazamento interno é possível mesmo sem óleo visível.',insight:'Ausência de vazamento externo não exclui passagem interna entre câmaras.'},
      {id:'historico',title:'Consultar ordens anteriores',type:'Histórico',cost:3,tag:'historico',result:'O equipamento já recebeu reclamação semelhante; o encerramento anterior apenas mencionava “verificado”, sem medição.',insight:'Histórico sem dados mensuráveis tem baixo poder diagnóstico.'},
      {id:'mangueira',title:'Desconectar uma linha ainda pressurizada',type:'Invasiva',cost:18,tag:'energia',unsafe:true,result:'Ação inadmissível: fluido pressurizado e movimento inesperado são riscos graves. Testes só com procedimento e desenergização aplicáveis.',insight:'O jogo penaliza ações que expõem pessoas ao perigo, mesmo quando prometem “economizar tempo”.'}
    ],
    core:['esquema','comparacao','vazamento'],
    hypotheses:[
      {text:'Perda de desempenho localizada, com evidência de vazamento interno no cilindro do braço; confirmar escopo de reparo.',grade:2,requires:['comparacao','vazamento'],feedback:'A conclusão é sustentada por teste localizado e comparação funcional.'},
      {text:'Falha irreversível da bomba principal confirmada pelo comportamento a quente.',grade:0,feedback:'Um sintoma em apenas uma função não comprova falha da bomba principal.'},
      {text:'Vazamento externo grave é certo, mesmo sem indícios.',grade:0,feedback:'Não há evidência de vazamento externo.'},
      {text:'Pode ser vazamento interno em algum ponto, mas sem localizar o subsistema.',grade:1,feedback:'Hipótese ampla e plausível, porém menos fundamentada.'}
    ],
    solutions:[
      {text:'Documentar resultados, validar limites/procedimento OEM e planejar avaliação/reparo do cilindro e suas vedações, com teste pós-intervenção.',grade:2,requires:['vazamento','esquema'],feedback:'Delimita o componente e prevê validação após o serviço.'},
      {text:'Trocar a bomba principal e apagar o histórico.',grade:0,feedback:'Substituição dispendiosa e sem sustentação técnica.'},
      {text:'Liberar sem ação porque não houve vazamento externo.',grade:0,feedback:'Ignora o sinal interno e o sintoma funcional.'},
      {text:'Ajustar pressão de alívio por tentativa e erro.',grade:0,feedback:'Ajuste sem referência OEM é inseguro e não corrige vazamento interno.'}
    ],
    verdict:'A comparação funcional, associada a ensaio interno simulado e autorizado, sustenta perda interna no cilindro do braço. A causa física específica exige inspeção adicional. Não há suporte para condenar a bomba principal.',
    pitfalls:['Pressão hidráulica armazenada pode causar lesões graves.','Uma função lenta não significa bomba principal defeituosa.','O jogo não apresenta valores reais de pressão ou regulagens por falta de validação OEM.'],
    next:['Reunir procedimento e esquema por série','Confirmar condição do atuador com teste controlado por habilitado','Documentar medições e fotos','Planejar reparo, inspecionar causa física e testar após intervenção'],note:'BL – SISTEMA HIDRÁULICO – MOVIMENTO DO BRAÇO LENTO',source:'Estratégia de Manutenção de Mina + princípio de testes CAT ET/SIS; sintomas e leituras deste episódio são simulados'
  },
  {
    id:'777-diluicao',number:'06',title:'Diesel dentro do óleo',subtitle:'O motor avisa antes de parar',asset:'777 · Caminhão fora de estrada',model:'777',illustration:'truck',system:'Óleo do motor diesel',level:'Avançado',category:'Motores',risk:'Crítico',target:33,estimated:'10–14 min',
    teaser:'Viscosidade reduzida e suspeita de combustível. Um palpite sobre injetores não basta.',
    brief:'O laudo do óleo do motor mostra indício de diluição por combustível e redução de viscosidade. O caminhão permanece funcional, mas há risco de perda de proteção lubrificante. A origem do combustível ainda não foi confirmada.',
    objectives:['Interpretar diluição sem atribuir causa automaticamente','Relacionar análise SOS e diagnóstico eletrônico','Definir coleta, tratamento de óleo/filtro e acompanhamento'],
    initial:['Viscosidade abaixo da tendência anterior (simulada)','Indicação laboratorial de combustível no óleo','Sem diagnóstico de injetor confirmado'],
    triage:[
      {text:'Suspender liberação normal até avaliação do risco e definir diagnóstico com segurança.',grade:2,feedback:'A perda de viscosidade pode comprometer lubrificação; a condição precisa de avaliação.'},
      {text:'Manter trabalho pesado e observar se o motor quebra.',grade:0,feedback:'Operar até a falha sem avaliar diluição pode ampliar dano.'},
      {text:'Substituir imediatamente todos os injetores sem ensaio.',grade:1,feedback:'A origem da contaminação não foi definida.'}
    ],
    inspections:[
      {id:'laudo',title:'Conferir laudo e histórico',type:'Documento',cost:5,tag:'laudo',result:'Diluente combustível indicado e viscosidade em queda na série de amostras. O grau de severidade exige checagem da recomendação original.',insight:'A análise indica fenômeno químico/lubrificante; não fecha causa raiz do sistema de injeção.'},
      {id:'coleta',title:'Conferir coleta e compartimento',type:'Coleta',cost:5,tag:'amostra',result:'A identificação da amostra do motor está coerente. Confere-se horímetro, óleo e histórico para reduzir erro de amostragem.',insight:'Dado correto depende de amostra representativa.'},
      {id:'catet',title:'Consultar parâmetros e eventos CAT ET',type:'Diagnóstico',cost:6,tag:'catet',result:'Os dados simulados revelam evento intermitente relacionado a desempenho de combustão; nenhum código isolado comprova injetor com fuga mecânica.',insight:'CAT ET ajuda a direcionar testes, mas não é substituto de evidência mecânica.'},
      {id:'teste',title:'Planejar testes do sistema de injeção',type:'Teste',cost:8,tag:'injecao',result:'Testes didáticos controlados sugerem comportamento irregular em um cilindro. A causa exata requer confirmação em procedimento OEM e eventual inspeção física.',insight:'A hipótese de injeção ganha peso, mas não vira diagnóstico definitivo por um único parâmetro.'},
      {id:'pressao',title:'Revisar alertas de lubrificação',type:'Histórico',cost:4,tag:'lubrificacao',result:'Não consta alerta ativo persistente de pressão de óleo. Isto não garante proteção adequada com óleo diluído.',insight:'Pressão aparente normal não valida a integridade do filme lubrificante.'},
      {id:'filtro',title:'Verificar filtros e plano de troca',type:'Documento',cost:4,tag:'filtro',result:'O óleo do motor possui circuito com filtragem. Se houver remoção do filtro para inspeção interna, ele não deve ser reinstalado; seguir troca conforme procedimento.',insight:'Diferente de compartimentos fechados, o motor tem filtragem dedicada.'},
      {id:'especificacao',title:'Consultar óleo e volume no OEM',type:'Documento',cost:4,tag:'manual',result:'Especificação, capacidade e PN do filtro dependem do motor/configuração, devendo ser verificados no SIS, plano ou kit vigente.',insight:'Não copie quantidades ou PN genéricos.'},
      {id:'rodar',title:'Forçar ensaio de carga sem autorização',type:'Invasiva',cost:20,tag:'forcar',unsafe:true,result:'Ensaio sob carga fora de procedimento é uma forma inadequada de “confirmar” o problema.',insight:'Não sacrifique segurança ou ativo por uma prova improvisada.'}
    ],
    core:['laudo','catet','injecao','filtro'],
    hypotheses:[
      {text:'Diluição do óleo por combustível confirmada como condição; investigar sistema de injeção e outras vias sem atribuir injetor específico por antecipação.',grade:2,requires:['laudo','injecao'],feedback:'Separa a condição observada de suas causas ainda pendentes.'},
      {text:'Todos os injetores defeituosos são a causa raiz confirmada.',grade:0,feedback:'Não há ensaio suficiente para condenar todos os injetores.'},
      {text:'O óleo está adequado porque não existe alarme de pressão.',grade:0,feedback:'Pressão normal não garante viscosidade e propriedades adequadas.'},
      {text:'Há anomalia de óleo, mas o diagnóstico eletrônico deve ser ignorado.',grade:1,feedback:'Perde informação importante para orientar os testes.'}
    ],
    solutions:[
      {text:'Planejar diagnóstico de injeção conforme OEM, tratar óleo e filtro conforme laudo/procedimento, coletar antes e acompanhar nova análise.',grade:2,requires:['laudo','filtro'],feedback:'Boa sequência: preservar evidência, investigar fonte e restaurar as condições do lubrificante.'},
      {text:'Trocar apenas o filtro e liberar sem investigar combustível.',grade:0,feedback:'Não resolve diluição nem origem do contaminante.'},
      {text:'Substituir todo o motor por suspeita de injetor.',grade:0,feedback:'Medida desproporcional e sem diagnóstico.'},
      {text:'Só trocar óleo, sem registro nem testes do sistema de injeção.',grade:1,feedback:'Pode reduzir exposição temporária, mas o contaminante tende a retornar se a origem persistir.'}
    ],
    verdict:'O dado mais sólido é a diluição do óleo por combustível. O comportamento de injeção é uma hipótese de investigação, não um injetor definitivamente condenado. A resposta exige controle operacional, diagnóstico e restauração documentada do lubrificante.',
    pitfalls:['Diluição reduz viscosidade; pressão normal não torna o fluido adequado.','Código/evento eletrônico não equivale automaticamente a causa raiz.','Coletar óleo antes de trocar e considerar filtro motor conforme procedimento.'],
    next:['Preservar laudo e amostra representativa','Executar diagnóstico de injeção com testes OEM','Corrigir origem confirmada e executar serviço de óleo/filtro conforme orientação','Registrar retorno e repetir amostra para verificar tendência'],note:'SOS-MOTOR',source:'Procedimento interno de Notificações por Análise de Óleo · seções 8.3 e 13; apostila SIS/CAT ET'
  },
  {
    id:'dr410-compressor',number:'07',title:'Calor na perfuração',subtitle:'O compressor da DR410i',asset:'DR410i · Perfuratriz',model:'DR410i',illustration:'drill',system:'Compressor de ar',level:'Avançado',category:'Pneumática',risk:'Alto',target:32,estimated:'9–13 min',
    teaser:'Temperatura de descarga em elevação. Um óleo “parecido” é solução ou outra variável?',
    brief:'Durante uma jornada de perfuração, um compressor apresenta tendência de temperatura elevada e queda de desempenho. Foi sugerida substituição do óleo por outro produto com viscosidade nominal parecida, sem conferência de aprovação do fabricante.',
    objectives:['Priorizar investigação de arrefecimento e ventilação','Separar viscosidade de aprovação de lubrificante','Evitar improvisar substituição de óleo'],
    initial:['Tendência térmica crescente (valores simulados)','Ambiente com grande concentração de poeira','Sugestão informal de troca de lubrificante sem validação OEM'],
    triage:[
      {text:'Controlar a operação, avaliar limites/alarmes e preparar inspeção do compressor com segurança.',grade:2,feedback:'A elevação térmica requer verificação de limites OEM e da condição segura para testes.'},
      {text:'Desabilitar alarme térmico e continuar perfurando.',grade:0,feedback:'Desativar proteção agrava o risco de dano e acidentes.'},
      {text:'Trocar por qualquer óleo ISO VG 68 e liberar sem inspeção.',grade:0,feedback:'Mesma viscosidade não garante o mesmo pacote de aditivos nem aprovação para compressor.'}
    ],
    inspections:[
      {id:'historico',title:'Ler tendência de temperatura',type:'Histórico',cost:5,tag:'tendencia',result:'Na simulação, a temperatura subiu gradualmente ao longo de vários turnos. A pressão e os alarmes devem ser confrontados com limites específicos OEM.',insight:'Mudança progressiva indica degradação ou perda de eficiência; não escolhe sozinha a causa.'},
      {id:'arrefecimento',title:'Inspecionar trocador e fluxo de ar',type:'Inspeção',cost:7,tag:'trocador',result:'Superfície do trocador com grande acúmulo de particulado e passagem de ar obstruída em parte da área.',insight:'Restrição de troca térmica é uma causa física plausível da temperatura crescente.'},
      {id:'ventilacao',title:'Verificar ventilação e correias',type:'Inspeção',cost:6,tag:'ventilacao',result:'Foi constatada ventilação reduzida associada a acúmulo de material no percurso de ar. Não há evidência de correia rompida.',insight:'O sistema de arrefecimento deve ser avaliado como um conjunto.'},
      {id:'oleo',title:'Conferir óleo abastecido',type:'Documento',cost:5,tag:'oleo',result:'O óleo registrado é o previsto no plano, mas não há justificativa aprovada para o produto substituto sugerido. A classe de viscosidade isolada é insuficiente.',insight:'Lubrificante de compressor e óleo hidráulico podem ter mesma viscosidade nominal e formulações diferentes.'},
      {id:'filtro',title:'Inspecionar filtros aplicáveis',type:'Inspeção',cost:5,tag:'filtros',result:'Os elementos de admissão e separação requerem avaliação conforme plano. A evidência mais forte continua sendo a restrição visível de arrefecimento.',insight:'É necessário evitar a troca indiscriminada de componentes sem vínculo causal.'},
      {id:'sensores',title:'Comparar leitura com instrumento',type:'Teste',cost:6,tag:'sensor',result:'Verificação simulada indica tendência térmica real, e não apenas indicação espúria do sensor.',insight:'Antes de agir sobre um número, confirme que representa o fenômeno físico.'},
      {id:'manual',title:'Consultar manual/OEM compressor',type:'Documento',cost:5,tag:'manual',result:'Os limites de temperatura, especificação de óleo e procedimentos de limpeza dependem da configuração real. O jogo não atribui valores universais.',insight:'Especificações e equivalências precisam de autorização OEM.'},
      {id:'bypass',title:'Fazer bypass da proteção térmica',type:'Invasiva',cost:16,tag:'bypass',unsafe:true,result:'A proteção foi violada no cenário simulado, criando uma condição insegura.',insight:'Burlar intertravamentos é falha grave de decisão.'}
    ],
    core:['tendencia','trocador','ventilacao','oleo'],
    hypotheses:[
      {text:'Restrição de arrefecimento com perda de eficiência térmica; verificar outros fatores e parâmetros OEM antes de confirmar a correção.',grade:2,requires:['trocador','tendencia'],feedback:'A hipótese decorre da tendência e de achado físico diretamente relevante.'},
      {text:'O compressor está condenado porque a temperatura subiu.',grade:0,feedback:'Não há evidência de falha interna irreversível.'},
      {text:'A única causa é a marca do óleo, sem avaliar trocador.',grade:0,feedback:'O lubrificante pode importar, mas a evidência mais direta é obstrução de arrefecimento.'},
      {text:'Pode haver deficiência de arrefecimento, porém a adequação do óleo não importa.',grade:1,feedback:'Condição térmica e lubrificante devem ser avaliados separadamente.'}
    ],
    solutions:[
      {text:'Corrigir restrições de arrefecimento conforme procedimento, confirmar parâmetros e óleo OEM, testar após serviço sem desabilitar proteções.',grade:2,requires:['trocador','oleo'],feedback:'Ação associada ao mecanismo provável e com validação pós-serviço.'},
      {text:'Substituir por óleo hidráulico de mesma viscosidade sem aprovação.',grade:0,feedback:'Formulações e requisitos podem diferir mesmo em ISO VG semelhante.'},
      {text:'Desabilitar limite de temperatura para alcançar meta de perfuração.',grade:0,feedback:'Proteções não devem ser burladas.'},
      {text:'Substituir todo compressor sem inspeção adicional.',grade:1,feedback:'Escopo excessivo sem confirmação de dano interno.'}
    ],
    verdict:'O principal achado do cenário é redução da eficiência de arrefecimento por obstrução. A correção deve ser validada com referências OEM e teste controlado. Não é admissível substituir um óleo apenas pela viscosidade nominal sem aprovação.',
    pitfalls:['Classe ISO VG não comprova equivalência de aplicação.','Temperatura alta pode decorrer de arrefecimento, carga, ventilação ou condição interna.','Ajustes de alarme/intertravamento não são ferramentas de diagnóstico improvisado.'],
    next:['Conferir limites e alarmes no OEM','Inspecionar/limpar trocador e ventilação com segurança','Validar óleo, elementos e equivalências autorizadas','Medir condição após intervenção e registrar tendência'],note:'BL – COMPRESSOR – TEMPERATURA ELEVADA',source:'Estratégia de Manutenção de Mina; tema compressor DR410i da rotina de manutenção (cenário e leituras simulados)'
  }
];
window.PORCARIA_KNOWLEDGE = [
  {title:'1. Raciocínio diagnóstico',tags:['Diagnóstico','Fundamentos'],body:'Sintoma → mecanismo possível → hipóteses concorrentes → teste discriminante → evidência → intervenção → validação. Evidências isoladas raramente determinam causa raiz. Registre fatos antes de hipóteses e mantenha incertezas explícitas.',source:'Projeto de melhoria do fluxo de notificações · seções 3 e 4'},
  {title:'2. Análise SOS não é desmontagem',tags:['SOS','Tribologia'],body:'O laboratório pode identificar contaminação, degradação, metais de desgaste, viscosidade anormal e mistura de fluidos. O laudo não confirma, sozinho, a causa raiz. Preservar a interpretação original e documentar complementos de Engenharia. Conferir relatórios, datas, ativo, compartimento e duplicidade de nota.',source:'Procedimento de Notificações por Análises de Óleo · seções 3 a 8'},
  {title:'3. Silício, água e metais',tags:['SOS','Química'],body:'Silício e alumínio podem indicar ingresso de poeira, mas dependem do contexto; água pode provocar emulsão, corrosão e perda de capacidade de lubrificação; ferro, cobre e outros metais podem indicar desgaste. Não atribuir automaticamente um metal a uma peça específica. Comparar tendência, método de coleta e evidências de campo.',source:'Procedimento de Notificações por Análises de Óleo · seção 8'},
  {title:'4. Óleo antes da intervenção',tags:['SOS','Coleta'],body:'Em atividades que envolvam troca de óleo, coletar amostra representativa antes de drenar conforme procedimento. Registrar horas, identificação e fluido aplicado. Em nova coleta, o procedimento interno prevê o kit 1Z0101 / Kit Coleta / 1. O relatório de retorno precisa manter rastreabilidade da condição encontrada.',source:'Procedimento de Notificações por Análises de Óleo · seções 12, 13 e 18'},
  {title:'5. Filtros por circuito',tags:['Lubrificação','Materiais'],body:'Comando final, diferencial, redutor de giro e outros compartimentos fechados normalmente não possuem filtro de óleo dedicado. Motor, transmissão e circuitos com filtragem possuem requisitos próprios. Nunca pedir filtro de outro circuito sem comprovar compartilhamento de fluido. Validar PN, especificação e volume no manual/SAP.',source:'Procedimento de Notificações por Análises de Óleo · seção 13'},
  {title:'6. Prioridade e liberação',tags:['Criticidade','Segurança'],body:'Resultado laboratorial e prioridade operacional não são sinônimos. Avalie risco a pessoas, ambiente, ativo, tendência e consequência de postergar. Uma prioridade muito elevada não prova automaticamente que a máquina esteja formalmente parada; isso depende da condição operacional e da avaliação responsável.',source:'Estratégia de Manutenção de Mina · P0 a P3; Procedimento SOS · seção 14'},
  {title:'7. CAT ET como fonte de evidências',tags:['Eletrônica','CAT ET'],body:'Uma ferramenta eletrônica pode exibir códigos ativos/históricos, eventos, parâmetros, testes e tendências. A função disponível varia por equipamento e ECM. Códigos orientam o diagnóstico: não confirmam necessariamente qual componente mecânico falhou.',source:'Manual Cat ET (material histórico de treinamento) e Apostila SIS & ET'},
  {title:'8. Dados SAP utilizáveis',tags:['SAP','Planejamento'],body:'A nota deve conter componente, localização, sintoma, circunstância, evidência, atividade recomendada, materiais, mão de obra e condição de operação. Parte/causa devem respeitar nível de confirmação. Verificar duplicidades, priorizar e encaminhar para execução, PCM ou Engenharia.',source:'Projeto de Melhoria do Fluxo de Notificações · páginas 2–6'},
  {title:'9. Retorno e fechamento',tags:['SAP','Qualidade'],body:'Inspecionar sem registrar o encontrado é informação perdida. Retorno de execução pode incluir vedações, vazamentos, limalha, bujão, temperaturas, pressões, óleo, horas, fotos e identificação da amostra. Não encerrar uma pendência apenas por ter executado uma ação se o laudo de verificação ainda é necessário.',source:'Procedimento de Notificações por Análises de Óleo · seções 18 e 19'},
  {title:'10. Modo de uso deste simulador',tags:['Segurança','Jogo'],body:'Todos os valores, achados, ocorrências, decisões e resultados apresentados nas missões são SIMULADOS e didáticos. Os modelos e sistemas representam classes reais da frota, mas não reproduzem um laudo confidencial ou condição verificada de um ativo atual. Procedimentos e limites OEM por número de série prevalecem. Nunca use a pontuação para liberar equipamento real.',source:'Nota de desenvolvimento P.O.R.C.A.R.I.A. v1.0'}
];
