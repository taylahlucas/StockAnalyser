import requests
import csv
from rest_framework import permissions, viewsets, mixins
from .models import AsxCompanyModel
from .serializers import AsxCompanySerializer

class AsxCompanyView(
    mixins.ListModelMixin,
    viewsets.GenericViewSet
):
    serializer_class = AsxCompanySerializer

    def get_queryset(self):
        AsxCompanyModel.objects.all().delete()
        csv_file = requests.get('http://www.asx.com.au/asx/research/ASXListedCompanies.csv')

        csv_reader = csv.reader(csv_file.text)
        companies = []
        company_info = []
        count = 0
        for row in csv_reader:
            if len(row) == 1:
                if len(row[0]) >= 3:
                    if count < 3:
                        company_info.append(row[0])
                    count += 1
                    if count == 3:
                        companies.append(company_info)
                        company_info = []
                        count = 0

        for company in companies:
            for section in AsxCompanyModel.sector_choices:
                if company[2] == section[0]:
                    company_section = section[0]
                    for parent_section in AsxCompanyModel.parent_sector_choices:
                        if parent_section[0].__contains__(section[0]):
                            parent_section_title = parent_section[1]

            AsxCompanyModel.objects.create(
                name=company[0],
                asx_code=company[1],
                parent_sector=parent_section_title,
                sector=company_section
            )

        return AsxCompanyModel.objects.all()