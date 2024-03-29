const aclRules = [
  {
    group: "usuarioCIAP",
    permissions: [
      {
        resource: "/processo/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Processos",
        visible: false,
      },
      {
        resource: "/menu/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Menus",
        visible: false,
      },
      {
        resource: "/instituicao/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "CIAP",
        visible: false,
      },
      {
        resource: "/usuario",
        methods: ["POST", "GET"],
        action: "allow",
        name: "Criar usuário",
        visible: false,
      },
      {
        resource: "/pergunta/*",
        methods: ["POST", "GET"],
        action: "allow",
        name: "Perguntas",
        visible: true,
      },
      {
        resource: "/droga/*",
        methods: ["POST", "GET"],
        action: "allow",
        name: "Droga",
        visible: false,
      },
      {
        resource: "/visita/*",
        methods: ["POST", "GET"],
        action: "allow",
        name: "Visitas",
        visible: true,
      },
      {
        resource: "/prestador/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Prestador",
        visible: true
      },
      {
        resource: "/profissional/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Profissional",
        visible: true,
      },
      {
        resource: "/entrevistas/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Entrevistas",
        visible: true,
      },
      {
        resource: "/instituicao-parceira/*",
        methods: ["POST", "GET"],
        action: "allow",
        name: "Instituicao parceira",
        visible: true,
      },
      {
        resource: "/agendamento-prestacao/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Pena alternativa",
        visible: true,
      },
      {
        resource: "/vara-penal/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Vara penal",
        visible: true,
      },
      {
        resource: "/processo/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Processo",
        visible: true,
      },
      {
        resource: "/select/*",
        methods: ["GET"],
        action: "allow",
        name: "Selects",
        visible: false,
      },
      {
        resource: "/frequencia/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Frequência",
        visible: true,
      },
      {
        resource: "/usuario-logado",
        methods: ["GET"],
        action: "allow",
        name: "Usuário logado",
        visible: false
      }
    ]
  },
  {
    group: "usuarioEntidade",
    permissions: [
      {
        resource: "/menu/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Menus",
        visible: false,
      },
    ]
  },
  {
    group: "deslogado",
    permissions: [
      {
        resource: "/login/*",
        methods: "*",
        action: "allow",
        name: "Login",
        visible: false,
      },
      {
        resource: "/usuario/",
        methods: ["POST"],
        action: "allow",
        name: "Criar usuário",
        visible: false,
      },
    ],
  },
  {
    group: "Administrador",
    permissions: [
      {
        resource: "*",
        methods: "*",
        action: "allow",
        visible: false,
      },
    ],
  }
];
export default aclRules;