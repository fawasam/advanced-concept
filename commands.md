
# GET INGRESS DETAILS
sudo kubectl get ingress -A

# GET CERTIFICATE DETAILS
sudo kubectl get certificate -A

# GET POD DETAILS
sudo kubectl get pods -A

# GET DEPLOYMENT DETAILS
sudo kubectl get deployment -A

# GET SERVICE DETAILS
sudo kubectl get service -A

# GET NAMESPACE DETAILS
sudo kubectl get namespace

# GET ALL DETAILS
sudo kubectl get all -A

# GET ALL DETAILS WITH MORE DETAILS
sudo kubectl get all -A -o wide

# GET ALL DETAILS WITH MORE DETAILS AND MORE COLUMNS
sudo kubectl get all -A -o wide -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.metadata.namespace}{"\t"}{.metadata.creationTimestamp}{"\t"}{.status.phase}{"\n"}{end}'