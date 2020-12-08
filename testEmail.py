import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import sys


def doEmail(emailAddressToC,newsAboutSales):
    message = Mail(
        from_email='theadequate5donotreply@gmail.com',
        to_emails=emailAddressToC,
        subject='New games on sale!',
        html_content=newsAboutSales)

    try:
        print(os.environ.get('SENDGRID_API_KEY'))
        sg = SendGridAPIClient('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')
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print("Error!")
        print(e.message)


def main():
    #print("Hello World");
    email = sys.argv[1]
    args = str(sys.argv[2])
    args = args.replace("\\","");
    #print("Email: "+email)
    print("Args: "+args)
    if (args != ""):
        print("Args.")
        doEmail(email,args);
    #doEmail(email,sys.argv[2]

main()
