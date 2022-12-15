package student;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Scanner;

public class abc{
	

	
	public static void main(String[] args) 
	{
		try
		{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","cvr123");
			Scanner sc=new Scanner(System.in);
			while(true)
			{
				System.out.println("enter choice\n1-insert\n2-update\n3-delete\n4-display\n5-exit");
				int choice=sc.nextInt();
				int sid;
			
				String name="";
				switch(choice)
				{
					case 1:	System.out.println("enter sid and name");
							sid = sc.nextInt();
							sc.nextLine();
							name=sc.nextLine();
							PreparedStatement pstmt=con.prepareStatement("insert into student values(?,?)");
							pstmt.setInt(1, sid);
							pstmt.setString(2,name);
							int res=pstmt.executeUpdate();
							System.out.println(res+" inserted");
							break;
					
					
					case 2: System.out.println("enter sid and name");
							sid=sc.nextInt();
							sc.nextLine();
							name=sc.nextLine();
							PreparedStatement pstmt1=con.prepareStatement("update student set name=? where sid=?");
							pstmt1.setString(1,name);
							pstmt1.setInt(2, sid);
							res=pstmt1.executeUpdate();
							System.out.println(res+" updated");
							break;
							
					case 3: System.out.println("enter sid to be deleted");
							sid=sc.nextInt();
							PreparedStatement pstmt2=con.prepareStatement("delete from students where sid=?");
				
					pstmt2.setInt(1,sid);
							res=pstmt2.executeUpdate();
							System.out.println(res+" deleted");
							break;
					case 4: System.out.println("data in students is\nid\tname");
							PreparedStatement pstmt3=con.prepareStatement("select * from student");
							ResultSet rs=pstmt3.executeQuery();
							while(rs.next())
								System.out.println(rs.getInt(1)+"\t"+rs.getString(2));
							break;
					default:pstmt=con.prepareStatement("delete from student");
							pstmt.executeUpdate();
							System.exit(0);
				}
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
	}
}

