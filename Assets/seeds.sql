use departments_db;

insert into department(dept_name)
values
("Engineering"),
 ("Finance"),
("legal"),
 ("sales");

insert into roles(title, salary, department_id)
values
 ("Sales lead","100000", 1),
 ("Salesperson","80000", 2),
 ("Lead Engineer","150000", 3),
 ("Software Engineer","120000", 4),
 ("Account Manager","160000", 1),
 ("Accountant","125000", 2),
 ("Legal team lead","250000",3 ),
 ("lowyer","190000", 4);


insert into employee(first_name, last_name, role_id, manager_id)
 values
 ("John","Doe", 1, 1),
 ("Mike","Chan", 2, 2),
 ("Ashley","Rodriguez", 3, 3),
 ("Kevin","Tupik", 4, 4),
 ("Kunal","Singh",5, 5),
 ("Malia","Brown",6, 6),
 ("Sarah","Lourd",7, 7),
 ("Tom","Allen",8, 8);
